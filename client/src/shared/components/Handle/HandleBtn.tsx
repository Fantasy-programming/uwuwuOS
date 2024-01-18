import { cva, type VariantProps } from 'class-variance-authority';
import Styles from './HandleBtn.module.scss';

const handlebutton = cva(Styles.handle__button, {
  variants: {
    type: {
      close: Styles.close__button,
      minimize: Styles.minimize__button,
      maximize: Styles.maximize__button,
    },
  },
  defaultVariants: {
    type: 'close',
  },
});

export interface HandleBtnProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof handlebutton> {
  onClick?: () => void;
  children?: React.ReactNode;
}

const HandleBtn: React.FC<HandleBtnProps> = ({
  type,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={handlebutton({ type, className })}
      type="button"
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default HandleBtn;
