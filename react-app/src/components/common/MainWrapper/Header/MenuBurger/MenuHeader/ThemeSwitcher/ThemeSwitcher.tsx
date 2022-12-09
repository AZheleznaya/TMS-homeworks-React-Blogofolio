import React, {FC} from 'react';

import ThemeSwitcherItem from "./ThemeSwitcherItem/ThemeSwitcherItem";

import {ThemeVariant, useTheme} from "../../../../../../../context/ThemeContext";

import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher: FC = () => {

    const{theme, setTheme} = useTheme();

    const handleSetLightTheme = () => {
        setTheme(ThemeVariant.light);
        localStorage.setItem("theme", ThemeVariant.light);
    }

    const handleSetDarkTheme = () => {
        setTheme(ThemeVariant.dark);
        localStorage.setItem("theme", ThemeVariant.dark);
    }

    return (
        <div className={styles.themeSwitcherWrapper}>
            <ThemeSwitcherItem theme={ThemeVariant.light} activeTheme={theme} onClick={handleSetLightTheme} />
            <ThemeSwitcherItem theme={ThemeVariant.dark} activeTheme={theme} onClick={handleSetDarkTheme} />
        </div>
    );
};

export default ThemeSwitcher;