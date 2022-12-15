const colors = {
  '': 'bg-white',
  red: 'bg-red-700 text-white border-2 border-red-700',
};

const hoverColors = {
  '': 'bg-red-100',
  red: 'bg-white',
};

export default function Button({
  color = '',
  border,
  children,
  className,
  icon = false,
  ...props
}) {
  return (
    <div
      className={
        'group rounded-full overflow-hidden group relative ' +
        colors[color] +
        ' ' +
        (className ? ' ' + className : '') +
        (border && !color ? ' border-2 border-red-900' : '')
      }
    >
      <button
        className={
          'z-20 px-4 py-2 bg-transparent relative h-full transition-colors font-semibold group-hover:text-red-900 w-full' +
          (icon ? ' flex flex-row gap-2 items-center' : '')
        }
        {...props}
      >
        {children}
      </button>
      <span
        className={
          'z-10 block rounded-full h-full absolute top-0 left-0 w-0 group-hover:w-full transition-all' +
          ' ' +
          hoverColors[color]
        }
      ></span>
    </div>
  );
}
