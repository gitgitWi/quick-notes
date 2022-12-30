/** @jsxImportSource preact */

type CardTitleProps = {
  title: string;
  classNames?: string[];
};

export function CardTitle({ title, classNames = [] }: CardTitleProps) {
  return (
    <p class={['text-2xl', 'font-bold'].concat(classNames).join(' ')}>
      {title}
    </p>
  );
}
