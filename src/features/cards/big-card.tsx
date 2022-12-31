/** @jsxImportSource preact */

import type { Frontmatter } from '@/types';

import { CardTitle } from './card-title';
import { CardDescription } from './card-description';
import { CardUpdatedAt } from './card-updated-at';

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
    <article class="p-4 m-2 rounded-xl flex bg-indigo-200/70">
      {/* post type(memo/bookmark/summary..) badge? */}
      <a href={url} class="w-full text-indigo-900">
        {thumbnailUrl && <img src={thumbnailUrl}></img>}
        <CardTitle title={title} />
        {description && <CardDescription descriptionText={description} />}
        <CardUpdatedAt updatedAt={updatedAt} />
      </a>
    </article>
  );
}
