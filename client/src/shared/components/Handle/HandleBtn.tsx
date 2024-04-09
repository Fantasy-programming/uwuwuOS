import { cva, type VariantProps } from 'class-variance-authority';
import Styles from './HandleBtn.module.scss';

const handlebutton = cva(Styles.handle__button, {
  variants: {
    variant: {
      close: Styles.close__button,
      minimize: Styles.minimize__button,
      maximize: Styles.maximize__button,
    },
  },
  defaultVariants: {
    variant: 'close',
  },
});

export interface HandleBtnProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof handlebutton> {
  onClick?: () => void;
  children?: React.ReactNode;
}

const HandleBtn: React.FC<HandleBtnProps> = ({
  onClick,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={handlebutton({ variant, className })}
      type="button"
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default HandleBtn;
