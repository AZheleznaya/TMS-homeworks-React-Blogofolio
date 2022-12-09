import React, {ChangeEventHandler, FC} from 'react';

import {useTheme} from "../../../context/ThemeContext";

import styles from "./Textarea.module.css";

export interface TextareaError {
    text: string | null
    error: boolean
}

export interface TextareaProps {
    title: string
    id: string
    value?: string
    error?: TextareaError
    disabled?: boolean
    required: boolean
    placeholder?: string
    name?: string
    className?: string
    cols?: number
    rows?: number
    minLength?: number
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const Textarea: FC<TextareaProps> = (
    {
        title= "",
        value= "",
        id= "",
        placeholder= "",
        name= "",
        className= "",
        error= {text: null, error: false},
        disabled= false,
        required,
        onChange,
        cols,
        rows,
        minLength
    }) => {

    const {isDarkTheme} = useTheme();

    return (
        <div className={`${styles.textareaWrapper} ${!!className ? className : ""}`}>
            <label htmlFor={id} className={`${styles.label} ${isDarkTheme && styles.dark}`}>
                {title}
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder}
                    cols={cols}
                    rows={rows}
                    minLength={minLength}
                    className={`${styles.textarea} ${error?.error ? styles.error : ""}`}
                />
            </label>
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default Textarea;