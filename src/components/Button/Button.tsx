import { FC, MouseEventHandler } from 'react';
import styles from './Button.module.css';

const Button: FC<{
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ children, type, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
