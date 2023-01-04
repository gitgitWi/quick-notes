/** @jsxImportSource preact */

import type { Frontmatter } from '@/types';

import { CardTitle } from './card-title';
import { CardDescription } from './card-description';
import { CardUpdatedAt } from './card-updated-at';
import { CardTags } from './card-tags';

type BigCardProps = {} & Frontmatter;

/**
 * biggest card of post list
 */
export function BigCard({
  title,
  url,
  updatedAt,
  description = '',
  thumbnailUrl = '',
  tags = '',
}: BigCardProps) {
  return (
    <article
      class={[
        'p-6 m-4 my-8 rounded-xl',
        'flex flex-col select-none',
        'bg-indigo-200/80 shadow-lg shadow-indigo-900/80',
      ].join(' ')}
    >
      {/* post type(memo/bookmark/summary..) badge? */}
      <a
        href={url}
        class="w-full h-full flex flex-col justify-between text-indigo-900 hover:underline"
      >
        {thumbnailUrl && <img src={thumbnailUrl}></img>}

        <CardTitle title={title} />

        {description && <CardDescription descriptionText={description} />}
      </a>

      <div class="mt-2 flex flex-row justify-between text-sm text-indigo-900/60">
        <CardTags tags={tags.split(TAG_SPLIT_REG)} />
        <CardUpdatedAt updatedAt={updatedAt} />
      </div>
    </article>
  );
}

const TAG_SPLIT_REG = /\,\s*/;
