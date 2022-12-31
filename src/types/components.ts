import type { ComponentChildren } from 'preact';

export type PropsWithClassNames<T = {}> = T & { classNames?: string[] };
export type PropsWithPreactChildren<T = {}> = T & {
  children: ComponentChildren;
};
