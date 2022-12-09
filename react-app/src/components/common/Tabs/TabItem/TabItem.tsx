import React, {FC} from 'react';

import {useTheme} from "../../../../context/ThemeContext";

import styles from "./TabItem.module.css";

export interface ITabItem {
    id: number
    title: string
    disabled?: boolean
}

interface TabItemProps extends ITabItem {
    activeTabItem: number
    onClick: any
}

const TabItem: FC<TabItemProps> = (
    {
        id,
        title= "",
        activeTabItem,
        disabled = false,
        onClick
    }) => {

    const {isDarkTheme} = useTheme();

    const handleTabItemClick = () => onClick(id);

    return (
        <button
            onClick={handleTabItemClick}
            className={`
                ${styles.tabItem} 
                ${isDarkTheme && styles.dark}
                ${activeTabItem === id ? styles.active : ""}
            `}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default TabItem;