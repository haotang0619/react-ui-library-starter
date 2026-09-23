import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Test } from './Test';

describe('Test', () => {
  it('renders its children', () => {
    render(<Test>Hello world!</Test>);

    expect(screen.getByText('Test: Hello world!')).toBeInTheDocument();
  });
});
