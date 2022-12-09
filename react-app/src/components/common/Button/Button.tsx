import React, {FC, MouseEventHandler} from 'react';

import {WithChildren} from "../../../types/withChildren";

import styles from "./Button.module.css";

export enum ButtonVariantProps {
    primary = "primary",
    secondary = "secondary"
}

type ButtonTypeProps = "button" | "submit" | "reset"

export interface ButtonProps {
    type?: ButtonTypeProps
    className?: string
    variant?: ButtonVariantProps
    onClick?: MouseEventHandler
}

const Button: FC<ButtonProps & WithChildren> = (
    {
        type= "button",
        className= "",
        variant= ButtonVariantProps.primary,
        onClick= () => {},
        children
    }) => {
    return (
        <button
            onClick={onClick}
            className={`
                ${styles.button}
                ${variant === ButtonVariantProps.primary ? styles.primary : styles.secondary}
                ${className}
            `}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;