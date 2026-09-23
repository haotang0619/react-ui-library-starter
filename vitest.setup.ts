import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Unmount rendered trees between tests since Vitest globals are not enabled.
afterEach(() => {
  cleanup();
});
