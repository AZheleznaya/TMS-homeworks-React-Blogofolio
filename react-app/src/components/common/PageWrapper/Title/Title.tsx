import React, {FC} from 'react';

import {useTheme} from "../../../../context/ThemeContext";

import styles from "./Title.module.css";

interface TitleProps {
    nameTitle: string
    className?: string
}

const Title: FC<TitleProps> = ({nameTitle= "", className= ""}) => {

    const {isDarkTheme} = useTheme();

    return (
        <h1 className={`${styles.title} ${isDarkTheme && styles.dark} ${className}`}>
            {nameTitle}
        </h1>
    );
};

export default Title;