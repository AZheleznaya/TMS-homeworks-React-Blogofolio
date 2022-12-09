import React, {FC} from 'react';

import {WithChildren} from "../../../../../../../types/withChildren";

import styles from "./MenuHeaderItem.module.css";

export enum MenuHeaderItemVariants {
    primary = "primary",
    secondary = "secondary"
}

interface MenuHeaderItemProps {
    onClick: () => void
    variant?: MenuHeaderItemVariants
}

const MenuHeaderItem: FC<MenuHeaderItemProps & WithChildren> = (
    {
        onClick,
        variant= MenuHeaderItemVariants.primary,
        children
    }) => {
    return (
        <li
            onClick={onClick}
            className={`${styles.menuHeaderItem} ${variant === MenuHeaderItemVariants.secondary ? styles.secondary : ""}`}
        >
            {children}
        </li>
    );
};

export default MenuHeaderItem;