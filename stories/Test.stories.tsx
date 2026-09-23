import type { Meta, StoryObj } from '@storybook/react-vite';

import { Test } from '../src';

const meta = {
  component: Test,
  title: 'Components/Test',
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = { args: { children: 'Hello world!' } };
