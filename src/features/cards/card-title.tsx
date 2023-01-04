/** @jsxImportSource preact */

import type { PropsWithClassNames } from '@/types';

type CardTitleProps = PropsWithClassNames<{
  title: string;
}>;

export function CardTitle({ title, classNames = [] }: CardTitleProps) {
  return (
    <p
      class={['mb-2', 'text-2xl font-extrabold font-serif']
        .concat(classNames)
        .join(' ')}
    >
      {title}
    </p>
  );
}
