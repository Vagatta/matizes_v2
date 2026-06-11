// Cliente: carrito persistente en localStorage compartido entre páginas.
const STORAGE_KEY = 'matizes_cart';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  size?: string;
  qty: number;
}

function read(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(items: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  emit(items);
}

function emit(items: CartItem[]): void {
  document.dispatchEvent(new CustomEvent('cart:updated', { detail: items }));
}

function sameLine(a: CartItem, id: string, size?: string): boolean {
  return a.id === id && (a.size || '') === (size || '');
}

const Cart = {
  items(): CartItem[] {
    return read();
  },
  count(): number {
    return read().reduce((sum, i) => sum + i.qty, 0);
  },
  subtotal(): number {
    return read().reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  add(item: Omit<CartItem, 'qty'>, qty = 1): void {
    const items = read();
    const existing = items.find((i) => sameLine(i, item.id, item.size));
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ ...item, qty });
    }
    write(items);
  },
  setQty(id: string, size: string | undefined, qty: number): void {
    const items = read();
    const target = items.find((i) => sameLine(i, id, size));
    if (!target) return;
    target.qty = Math.max(1, qty);
    write(items);
  },
  remove(id: string, size?: string): void {
    write(read().filter((i) => !sameLine(i, id, size)));
  },
  clear(): void {
    write([]);
  },
};

function updateBadges(): void {
  const count = Cart.count();
  const subtotal = Cart.subtotal();
  document.querySelectorAll<HTMLElement>('[data-cart-count]').forEach((el) => {
    el.textContent = String(count);
    el.classList.toggle('hidden', count === 0);
  });
  document.querySelectorAll<HTMLElement>('[data-cart-subtotal]').forEach((el) => {
    el.textContent = subtotal.toFixed(2).replace('.', ',') + ' €';
    el.classList.toggle('hidden', count === 0);
  });
}

let initialized = false;

function init(): void {
  if (initialized) return;
  initialized = true;
  updateBadges();
  document.addEventListener('cart:updated', updateBadges);

  // Delegación: cualquier botón con data-add-to-cart añade al carrito.
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    // Heart button (prevent navigation from product card link)
    const heartBtn = target.closest<HTMLElement>('.heart-btn');
    if (heartBtn) {
      e.preventDefault();
      // Toggle wishlist logic could go here
      return;
    }

    const btn = target.closest<HTMLElement>('[data-add-to-cart]');
    if (!btn) return;
    e.preventDefault();
    const price = parseFloat(btn.dataset.price || '0');
    if (!btn.dataset.id || Number.isNaN(price)) return;
    Cart.add({
      id: btn.dataset.id,
      name: btn.dataset.name || btn.dataset.id,
      price,
      image: btn.dataset.image || '',
      category: btn.dataset.category || '',
      size: btn.dataset.size || '',
    });

    const original = btn.getAttribute('data-label-original') || btn.innerHTML;
    btn.setAttribute('data-label-original', original);
    btn.innerHTML = '<i class="fa-solid fa-check text-xs"></i> Añadido';
    window.setTimeout(() => {
      btn.innerHTML = original;
    }, 1200);
  });
}

declare global {
  interface Window {
    MatizesCart: typeof Cart;
  }
}

window.MatizesCart = Cart;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export default Cart;
