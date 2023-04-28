import storybookCodePanel from './storybookCodePanel';
import { Test, TestProps } from '../src';

export default {
  title: 'Components/Test',
  component: Test,
  parameters: {
    storybookCodePanel: storybookCodePanel('Test'),
  },
};

export const Main: { args: TestProps } = { args: { children: 'Hello world!' } };
