import React from "react";
import styles from "./LinkButton.module.scss";

const LinkButton = ({ children, disabled = false, className, onClick = () => {}, style = {} }) => {
	return (
		<button style={{ ...style }} onClick={disabled ? () => {} : onClick} className={[styles.button, className].join(" ")}>
			{children}
		</button>
	);
};

export default LinkButton;
