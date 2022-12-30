/** @jsxImportSource preact */

import type { Frontmatter } from '@/types';

import { CardTitle } from './card-title';

type BigCardProps = {} & Frontmatter;

/**
 * biggest card of post list
 */
export function BigCard({
  title,
  url,
  updatedAt,
  thumbnailUrl = '',
}: BigCardProps) {
  return (
    <article class="p-4 m-2 rounded-xl flex bg-indigo-200/70">
      <a href={url} class="w-full text-indigo-900">
        <CardTitle title={title} />
        <p class="text-sm text-right italic text-indigo-900/70">
          updated: {updatedAt}
        </p>
      </a>
    </article>
  );
}
