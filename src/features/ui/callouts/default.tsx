/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type DefaultCalloutProps = PropsWithClassNames<PropsWithPreactChildren>;

export function DefaultCallout({
  classNames = [],
  children,
}: DefaultCalloutProps) {
  return (
    <blockquote
      class={[
        'm-2 p-4 px-6 rounded-md',
        'font-serif italic text-base font-semibold leading-8 bg-indigo-300/90 text-indigo-900',
        'shadow-md shadow-indigo-800/70',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {children}
    </blockquote>
  );
}
