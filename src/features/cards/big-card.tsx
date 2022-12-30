/** @jsxImportSource preact */

type BigCardProps = {
  title: string;
  url: string;
  updatedAt: string;
};

/**
 * biggest card of post list
 */
export function BigCard({ title, url, updatedAt }: BigCardProps) {
  return (
    <article class="p-4 m-2 rounded-xl flex bg-indigo-200/70">
      <a href={url} class="w-full text-indigo-900">
        <p class="text-lg">{title}</p>
        <p class="text-sm text-right italic text-indigo-900/70">
          updated: {updatedAt}
        </p>
      </a>
    </article>
  );
}
