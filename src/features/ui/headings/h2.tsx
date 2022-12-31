/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type H2Props = PropsWithClassNames<PropsWithPreactChildren>;

export function H2({ classNames = [], children }: H2Props) {
  return (
    <h2
      class={[
        'my-4 text-5xl text-indigo-100 font-extrabold whitespace-normal break-words cursor-pointer hover:underline',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </h2>
  );
}
