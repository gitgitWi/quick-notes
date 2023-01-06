/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type H2Props = PropsWithClassNames<PropsWithPreactChildren<{ id: string }>>;

export function H2({ classNames = [], children, id }: H2Props) {
  return (
    <h2
      id={id}
      class={[
        'mt-6 mb-4 text-5xl text-indigo-100 font-extrabold whitespace-normal break-words',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </h2>
  );
}
