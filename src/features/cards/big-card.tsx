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
}: BigCardProps) {
  return (
    <article class="p-6 m-2 rounded-xl flex bg-indigo-200/80">
      {/* post type(memo/bookmark/summary..) badge? */}
      <a
        href={url}
        class="w-full h-full flex flex-col justify-between text-indigo-900"
      >
        {thumbnailUrl && <img src={thumbnailUrl}></img>}

        <CardTitle title={title} />

        {description && <CardDescription descriptionText={description} />}

        <div class="flex flex-row justify-between text-sm text-indigo-900/60">
          <CardTags tags={[]} />
          <CardUpdatedAt updatedAt={updatedAt} />
        </div>
      </a>
    </article>
  );
}
