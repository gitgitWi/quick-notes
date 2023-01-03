/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type DescriptionProps = PropsWithClassNames<PropsWithPreactChildren>;

export function Description({ classNames = [], children }: DescriptionProps) {
  return (
    <blockquote
      class={[
        'w-max max-w-full mb-4 py-4 px-6 rounded-2xl font-sans font-semibold italic text-lg bg-indigo-300/90 text-indigo-700',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </blockquote>
  );
}
