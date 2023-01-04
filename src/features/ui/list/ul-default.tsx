/** @jsxImportSource preact */

import type { PropsWithClassNames, PropsWithPreactChildren } from '@/types';

type UlProps = PropsWithClassNames<PropsWithPreactChildren>;

export function DefaultUl({ classNames = [], children }: UlProps) {
  return <ul class={['ml-2'].concat(classNames).join(' ')}>{children}</ul>;
}
