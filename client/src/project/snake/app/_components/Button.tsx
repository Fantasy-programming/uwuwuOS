import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Style from './Button.module.scss';

const buttonVariants = cva(Style.button, {
  variants: {
    variant: {
      primary: Style.primary,
      secondary: Style.secondary,
      danger: Style.danger,
      link: Style.link,
    },
    size: {
      default: '',
      sm: Style.small,
      lg: Style.large,
      icon: Style.icon,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        <span>{props.children}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';
