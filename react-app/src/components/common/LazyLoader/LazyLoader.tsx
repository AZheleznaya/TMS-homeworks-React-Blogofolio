import React, {FC} from 'react';

import {useTheme} from "../../../context/ThemeContext";

import styles from "./LazyLoader.module.css";

const LazyLoader: FC = () => {

    const {isDarkTheme} = useTheme();

    return (
        <div className={styles.lazyLoaderWrapper}>
            <div className={`${styles.lazyLoader} ${isDarkTheme && styles.lazyLoaderDark}`} />
            <div className={`${styles.lazyLoaderText} ${isDarkTheme && styles.lazyLoaderTextDark}`}>Loading</div>
        </div>
    );
};

export default LazyLoader;