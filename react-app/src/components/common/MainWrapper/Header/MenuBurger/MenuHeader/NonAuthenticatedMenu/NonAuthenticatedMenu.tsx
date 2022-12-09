import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MenuHeaderItem, {MenuHeaderItemVariants} from "../MenuHeaderItem/MenuHeaderItem";

import {Routes} from "../../../../../../../constants/routes";

import styles from "../MenuHeader.module.css";

interface IMenuItem {
    title: string
    action: () => void
}

interface NonAuthenticatedMenuProps {
    menuItems: IMenuItem[]
}

const NonAuthenticatedMenu: FC<NonAuthenticatedMenuProps> = ({menuItems= []}) => {

    const navigate = useNavigate();

    const handleRedirectToSignIn = () => navigate(Routes.signIn)

    return (
        <>
            <div className={styles.menuHeaderTop}>
                {menuItems.map(item =>
                    <MenuHeaderItem key={item.title} onClick={item.action}>{item.title}</MenuHeaderItem>)
                }
            </div>
            <div className={styles.menuHeaderBottom}>
                <ThemeSwitcher />
                <MenuHeaderItem
                    onClick={handleRedirectToSignIn}
                    variant={MenuHeaderItemVariants.secondary}
                >
                    Sign In
                </MenuHeaderItem>
            </div>
        </>
    );
};

export default NonAuthenticatedMenu;