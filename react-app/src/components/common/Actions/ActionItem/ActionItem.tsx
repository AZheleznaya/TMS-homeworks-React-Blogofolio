import React, {FC, MouseEventHandler} from 'react';

import {WithChildren} from "../../../../types/withChildren";

import styles from "./ActionItem.module.css";

interface ActionItemProps {
    onClick: MouseEventHandler,
    icon?: any,
    text?: string
    className?: string
}

const ActionItem: FC<ActionItemProps & WithChildren> = (
    {
        icon = "",
        onClick,
        text= "",
        className= "",
        children
    }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.actionItem} ${className}`}
        >
            {!!icon && <img src={icon} className={styles.actionIcon} alt="iconImage" />}
            {children}
            {!!text && <span>{text}</span>}
        </button>
    );
};

export default ActionItem;