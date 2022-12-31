/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type InlineCodeProps = PropsWithClassNames<PropsWithPreactChildren>;

export function InlineCode({ classNames = [], children }: InlineCodeProps) {
  return (
    <code
      class={[
        'p-1 rounded-md font-mono font-medium bg-indigo-400 text-indigo-800',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </code>
  );
}
