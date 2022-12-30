/** @jsxImportSource preact */
import type { PropsWithClassNames } from '@/types';

type CardUpdatedAtProps = PropsWithClassNames<{
  updatedAt: string;
  prefix?: string;
}>;

export function CardUpdatedAt({
  updatedAt,
  prefix = '',
  classNames = [],
}: CardUpdatedAtProps) {
  return (
    <p
      class={['text-sm text-right italic text-indigo-900/70']
        .concat(classNames)
        .join(' ')}
    >
      {prefix || 'updated: '}
      {updatedAt}
    </p>
  );
}
