/** @jsxImportSource preact */

import type { Frontmatter } from '@/types';

import { CardTitle } from './card-title';
import { CardUpdatedAt } from './card-updated-at';
import { CardTags } from './card-tags';

type NormalCardProps = Omit<Frontmatter, 'description'>;

/**
 * normal card of post list
 */
export function NormalCard({
  title,
  url,
  updatedAt,
  thumbnailUrl = '',
  tags = '',
}: NormalCardProps) {
  return (
    <article class="p-6 m-2 rounded-xl flex flex-col bg-indigo-200/80 select-none">
      {/* post type(memo/bookmark/summary..) badge? */}
      <a
        href={url}
        class="w-full h-full flex flex-col justify-between text-indigo-900 hover:underline"
      >
        {thumbnailUrl && <img src={thumbnailUrl}></img>}

        <CardTitle title={title} />
      </a>

      <div class="mt-2 flex flex-row justify-between text-sm text-indigo-900/60">
        <CardTags tags={tags.split(TAG_SPLIT_REG)} />
        <CardUpdatedAt updatedAt={updatedAt} />
      </div>
    </article>
  );
}

const TAG_SPLIT_REG = /\,\s*/;
