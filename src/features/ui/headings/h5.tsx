/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type H5Props = PropsWithClassNames<PropsWithPreactChildren<{ id: string }>>;

export function H5({ classNames = [], children, id }: H5Props) {
  return (
    <h5
      id={id}
      class={[
        'my-2 ml-2 text-lg text-indigo-100/90 font-bold whitespace-normal break-words',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </h5>
  );
}
