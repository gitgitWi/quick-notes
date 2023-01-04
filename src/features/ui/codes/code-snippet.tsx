/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';
import styles from './styles.module.scss';

type CodeSnippetProps = PropsWithClassNames<PropsWithPreactChildren>;

export function CodeSnippet({ classNames = [], children }: CodeSnippetProps) {
  return (
    <pre
      class={[
        'w-11/12 p-2 pl-4 m-2 rounded-xl overflow-x-auto bg-slate-900/40 text-sm',
        styles.codeSnippet,
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </pre>
  );
}
