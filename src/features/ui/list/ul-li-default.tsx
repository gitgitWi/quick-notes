/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type UlLiProps = PropsWithClassNames<PropsWithPreactChildren>;

export function DefaultUlLi({ classNames = [], children }: UlLiProps) {
  return (
    <li class={['ml-2 list-inside list-disc'].concat(classNames).join(' ')}>
      {children}
    </li>
  );
}
