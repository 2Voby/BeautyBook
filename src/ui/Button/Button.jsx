import React from 'react';
import styles from "./Button.module.scss"

const Button = ({children, variant = "default", disabled= false, onClick = () => {}, width = "", style={}}) => {
  return (
    <button
      style={{width, ...style}}
      onClick={disabled ? () => {} : onClick}
      className={[styles.button, styles[variant]].join(" ")}
    >
      {children}
    </button>
  );
}

export default Button;