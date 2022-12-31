export type Frontmatter = Frontmatter$Core & Frontmatter$Post;

export type Frontmatter$Core = {
  title: string;
  url: string;
  updatedAt: string;
};

export type Frontmatter$Post = {
  description?: string;
  thumbnailUrl?: string;
};
