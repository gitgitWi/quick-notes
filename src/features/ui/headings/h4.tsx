/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type H4Props = PropsWithClassNames<PropsWithPreactChildren>;

export function H4({ classNames = [], children }: H4Props) {
  return (
    <h4
      class={[
        'my-2 ml-2 text-xl text-indigo-200/90 font-bold underline whitespace-normal break-words',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </h4>
  );
}
