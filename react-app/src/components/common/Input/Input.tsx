import React, {ChangeEventHandler, FC, HTMLInputTypeAttribute, MouseEventHandler, ReactEventHandler} from 'react';

import {useTheme} from "../../../context/ThemeContext";

import Button, {ButtonVariantProps} from "../Button/Button";

import styles from "./Input.module.css";

export interface InputError {
    text: string | null
    error: boolean
}

export interface InputProps {
    id: string
    title: string
    value: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    type?: HTMLInputTypeAttribute
    name?: string
    disabled?: boolean
    required?: boolean
    placeholder?: string
    error?: InputError
    className?: string
    onSelect?: ReactEventHandler<HTMLInputElement>
    onFileReset?: MouseEventHandler<HTMLSpanElement>
}

const Input: FC<InputProps> = (
    {
        id= "",
        title= "",
        type= "text",
        value= "",
        onChange,
        name= "",
        disabled= false,
        required,
        placeholder= "",
        error= {text: null, error: false},
        className= "",
        onSelect,
        onFileReset
    }) => {

    const {isDarkTheme} = useTheme();

    return (
        <div className={`${styles.inputWrapper} ${!!className ? className : ""}`}>
            <label htmlFor={id} className={`${styles.label} ${isDarkTheme && styles.dark}`}>
                {title}
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder}
                    onSelect={onSelect}
                    accept={"image/png, image/jpeg"}
                    className={`${styles.input} ${error?.error ? styles.error : ""}`}
                />
            </label>
            {type === "file" && !!value &&
                <Button onClick={onFileReset} variant={ButtonVariantProps.secondary} className={styles.reset}>
                    Reset
                </Button>
            }
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default Input;