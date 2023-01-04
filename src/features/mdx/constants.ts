import { H2, H3, H4, H5 } from '@features/ui/headings';
import { DefaultUl, DefaultUlLi } from '@features/ui/list';
import { InlineCode, CodeSnippet } from '@features/ui/codes';

export const DEFAULT_CUSTOM_COMPONENTS = Object.freeze({
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  ul: DefaultUl,
  li: DefaultUlLi,
  code: InlineCode,
  pre: CodeSnippet,
});
