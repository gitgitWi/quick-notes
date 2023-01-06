/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type DescriptionProps = PropsWithClassNames<PropsWithPreactChildren>;

export function Description({ classNames = [], children }: DescriptionProps) {
  return (
    <blockquote
      class={[
        'm-2 mb-6 py-2 px-6',
        'border-b-2 border-indigo-200/60 border-double',
        'font-semibold font-serif text-lg text-indigo-200/90',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </blockquote>
  );
}
