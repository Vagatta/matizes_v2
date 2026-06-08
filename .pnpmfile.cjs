module.exports = {
  hooks: {
    readPackage(pkg, context) {
      if (pkg.name === 'esbuild' || pkg.name === 'sharp') {
        pkg.scripts = pkg.scripts || {};
        // Permitir scripts de construcción
      }
      return pkg;
    },
  },
};
