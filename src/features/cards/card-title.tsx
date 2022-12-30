/** @jsxImportSource preact */

import type { PropsWithClassNames } from '@/types';

type CardTitleProps = PropsWithClassNames<{
  title: string;
}>;

export function CardTitle({ title, classNames = [] }: CardTitleProps) {
  return (
    <p
      class={['text-2xl', 'font-bold', 'hover:underline']
        .concat(classNames)
        .join(' ')}
    >
      {title}
    </p>
  );
}
