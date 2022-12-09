import React, {FC} from 'react';

import {useTheme} from "../../../../../context/ThemeContext";
import {WithChildren} from "../../../../../types/withChildren";

import styles from "./PopupListItem.module.css";

interface PopupListItemProps {
    onClick: any
    className?: string
}

const PopupListItem: FC<PopupListItemProps & WithChildren> = (
    {
        onClick,
        className= "",
        children
    }) => {

    const {isDarkTheme} = useTheme();

    return (
        <li
            onClick={onClick}
            className={`${styles.popupListItem} ${className} ${isDarkTheme && styles.dark}`}
        >
            {children}
        </li>
    );
};

export default PopupListItem;