/** @jsxImportSource preact */
import type { PropsWithClassNames } from '@/types';

type CardDescriptionProps = PropsWithClassNames<{
  descriptionText: string;
}>;

export function CardDescription({
  descriptionText,
  classNames = [],
}: CardDescriptionProps) {
  return (
    <p class={['text-base text-indigo-900/90'].concat(classNames).join(' ')}>
      {descriptionText}
    </p>
  );
}
