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
    <p class={['text-right italic'].concat(classNames).join(' ')}>
      {prefix || 'updated: '}
      {new Date(updatedAt).toLocaleDateString('ko-KR', {
        timeZone: 'Asia/Seoul',
      })}
    </p>
  );
}
