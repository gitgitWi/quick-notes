/** @jsxImportSource preact */

import type { PropsWithClassNames } from '@/types';

type CardTagsProps = PropsWithClassNames<{
  tags: string[];
}>;

export function CardTags({ tags, classNames = [] }: CardTagsProps) {
  return (
    <div class={[''].concat(classNames).join(' ')}>
      {tags.map((tag) => (
        <p class={[].join(' ')}>{tag}</p>
      ))}
    </div>
  );
}
