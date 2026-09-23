import { ReactNode } from 'react';

import styles from './Test.module.css';

export type TestProps = { children: ReactNode };
export const Test = ({ children }: TestProps) => (
  <span className={styles.root}>Test: {children}</span>
);
