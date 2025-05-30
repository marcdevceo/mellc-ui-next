import { paddingClass } from '@/theme/spacing';
import { bgColor } from '@/theme/color';
import clsx from 'clsx';
import { CardProps } from '@/types/components';

export default function Card({
  children,
  padding = 'md',
  background = 'accent',
  rounded = true,
  shadow = true,
  className = '',
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx('h-full flex-col',
        paddingClass[padding],
        bgColor[background],
        rounded && 'rounded-lg',
        shadow && 'shadow-md',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
