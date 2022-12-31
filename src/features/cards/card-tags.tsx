/** @jsxImportSource preact */

import type { PropsWithClassNames } from '@/types';

type CardTagsProps = PropsWithClassNames<{
  tags: string[];
}>;

export function CardTags({ tags, classNames = [] }: CardTagsProps) {
  return (
    <div
      class={['flex flex-row justify-start italic']
        .concat(classNames)
        .join(' ')}
    >
      {tags.map((tag) => (
        // TODO: posts-of-tag link
        <p class={['mr-1 hover:underline'].join(' ')}>#{tag}</p>
      ))}
    </div>
  );
}
