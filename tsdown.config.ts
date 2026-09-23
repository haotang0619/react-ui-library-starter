import { defineConfig } from 'tsdown';

export default defineConfig({
  // Merge all component styles into a single dist/style.css for consumers to import.
  css: { splitting: false },
  dts: true,
  entry: ['src/index.ts'],
  failOnWarn: true,
  format: ['esm', 'cjs'],
  inputOptions: {
    onLog(level, log, handler) {
      // With `unbundle`, every source file becomes its own output file, so
      // directives such as "use client" are kept; this warning is a false positive.
      if (log.code === 'MODULE_LEVEL_DIRECTIVE') return;
      handler(level, log);
    },
  },
  platform: 'neutral',
  sourcemap: true,
  // Keep one output file per source file to preserve "use client" and tree-shaking.
  unbundle: true,
});
