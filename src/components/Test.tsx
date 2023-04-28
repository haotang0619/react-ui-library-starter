import { ReactNode } from 'react';

export type TestProps = { children: ReactNode };
export const Test = ({ children }) => <>Test: {children}</>;
