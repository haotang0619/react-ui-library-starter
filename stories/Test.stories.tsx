import { Test, TestProps } from '../src';

import storybookCodePanel from './storybookCodePanel';

export default {
  component: Test,
  parameters: {
    storybookCodePanel: storybookCodePanel('Test'),
  },
  title: 'Components/Test',
};

export const Main: { args: TestProps } = { args: { children: 'Hello world!' } };
