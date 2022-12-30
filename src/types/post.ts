export type Frontmatter = {
  thumbnailUrl?: string;
} & Frontmatter$Core;

export type Frontmatter$Core = {
  title: string;
  url: string;
  updatedAt: string;
};
