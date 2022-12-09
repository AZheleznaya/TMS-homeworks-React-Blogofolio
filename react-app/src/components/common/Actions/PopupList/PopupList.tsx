import React, {FC} from 'react';

import {useTheme} from "../../../../context/ThemeContext";

import PopupListItem from "./PopupListItem/PopupListItem";

import styles from "./PopupList.module.css";

export interface IPopupList {
    title: string
    action: any
}

interface PopupListProps {
    popupListItems: IPopupList[]
}

const PopupList: FC<PopupListProps> = ({popupListItems= []}) => {

    const {isDarkTheme} = useTheme();

    return (
        <div className={`${styles.popupList} ${isDarkTheme && styles.dark}`}>
            {popupListItems
                .map(item =>
                    <PopupListItem key={item.title} onClick={item.action}>{item.title}</PopupListItem>)
            }
        </div>
    );
};

export default PopupList;