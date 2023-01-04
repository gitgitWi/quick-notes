/** @jsxImportSource preact */

import type { PropsWithClassNames } from '@/types';

type CardTagsProps = PropsWithClassNames<{
  tags: string[];
}>;

export function CardTags({ tags, classNames = [] }: CardTagsProps) {
  return (
    <div
      class={[
        'max-w-[60%] flex flex-row flex-wrap justify-start',
        'font-mono italic',
      ]
        .concat(classNames)
        .join(' ')}
    >
      {tags.map((tag) => (
        // TODO: posts-of-tag link
        <p class={['mr-1 hover:underline cursor-pointer'].join(' ')}>#{tag}</p>
      ))}
    </div>
  );
}
