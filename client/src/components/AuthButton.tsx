import classNames from 'classnames';
import styles from './AuthButton.module.css';
import { ButtonHTMLAttributes, FC } from 'react';


interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}


const AuthButton: FC<AuthButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default AuthButton;