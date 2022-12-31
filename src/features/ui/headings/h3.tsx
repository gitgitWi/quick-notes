/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type H3Props = PropsWithClassNames<PropsWithPreactChildren>;

export function H3({ classNames = [], children }: H3Props) {
  return (
    <h3
      class={[
        'max-w-[90%] my-4 text-3xl text-indigo-100/90 font-semibold italic whitespace-normal break-words',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </h3>
  );
}
