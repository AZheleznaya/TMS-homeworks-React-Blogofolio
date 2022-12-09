import React, {FC} from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import {WithChildren} from "../../../types/withChildren";
import {useTheme} from "../../../context/ThemeContext";

import styles from "./MainWrapper.module.css";

const MainWrapper: FC<WithChildren> = ({children}) => {

    const {isDarkTheme} = useTheme();

    return (
        <div className={`${styles.container} ${isDarkTheme && styles.dark}`}>
            <Header />
            <main className={styles.containerWrapper}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainWrapper;