// Cliente: lista de favoritos persistente en localStorage compartida entre páginas.
const FAVORITES_KEY = 'matizes_favorites';

export interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

function read(): FavoriteItem[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(items: FavoriteItem[]): void {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
  emit();
}

function emit(): void {
  document.dispatchEvent(new CustomEvent('favorites:updated', { detail: read() }));
}

const Favorites = {
  items(): FavoriteItem[] {
    return read();
  },
  ids(): string[] {
    return read().map((i) => i.id);
  },
  count(): number {
    return read().length;
  },
  has(id: string): boolean {
    return read().some((i) => i.id === id);
  },
  add(item: FavoriteItem): void {
    const items = read();
    if (items.some((i) => i.id === item.id)) return;
    items.push(item);
    write(items);
  },
  remove(id: string): void {
    write(read().filter((i) => i.id !== id));
  },
  toggle(item: FavoriteItem): boolean {
    if (Favorites.has(item.id)) {
      Favorites.remove(item.id);
      return false;
    }
    Favorites.add(item);
    return true;
  },
  clear(): void {
    write([]);
  },
};

function updateIcons(): void {
  const ids = Favorites.ids();
  document.querySelectorAll<HTMLElement>('.heart-btn').forEach((btn) => {
    const id = btn.dataset.id;
    if (!id) return;
    const active = ids.includes(id);
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
    const icon = btn.querySelector('i, .heart-icon');
    if (icon) {
      icon.classList.toggle('fa-solid', active);
      icon.classList.toggle('fa-regular', !active);
      icon.classList.toggle('text-gold', active);
    }
  });

  document.querySelectorAll<HTMLElement>('[data-favorite-count]').forEach((el) => {
    const count = Favorites.count();
    el.textContent = String(count);
    el.classList.toggle('hidden', count === 0);
  });

  document.querySelectorAll<HTMLElement>('[data-favorite-section]').forEach((section) => {
    const ids = Favorites.ids();
    const empty = section.querySelector<HTMLElement>('[data-favorite-empty]');
    const grid = section.querySelector<HTMLElement>('[data-favorite-grid]');
    if (empty) empty.classList.toggle('hidden', ids.length > 0);
    if (grid) {
      grid.querySelectorAll<HTMLElement>('[data-favorite-id]').forEach((card) => {
        const id = card.dataset.favoriteId;
        card.classList.toggle('hidden', !id || !ids.includes(id));
      });
    }
  });
}

let initialized = false;

function init(): void {
  if (initialized) return;
  initialized = true;
  updateIcons();
  document.addEventListener('favorites:updated', updateIcons);

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const btn = target.closest<HTMLElement>('.heart-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const id = btn.dataset.id;
    if (!id) return;

    const active = Favorites.toggle({
      id,
      name: btn.dataset.name || id,
      price: parseFloat(btn.dataset.price || '0'),
      image: btn.dataset.image || '',
      category: btn.dataset.category || '',
    });

    const icon = btn.querySelector('i');
    if (icon) {
      icon.classList.add('scale-125');
      window.setTimeout(() => icon.classList.remove('scale-125'), 200);
    }

    if (btn.classList.contains('with-toast')) {
      const original = btn.getAttribute('aria-label') || '';
      btn.setAttribute('aria-label', active ? 'Guardado en favoritos' : 'Eliminado de favoritos');
      window.setTimeout(() => btn.setAttribute('aria-label', original), 1200);
    }
  });
}

declare global {
  interface Window {
    MatizesFavorites: typeof Favorites;
  }
}

window.MatizesFavorites = Favorites;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export default Favorites;
