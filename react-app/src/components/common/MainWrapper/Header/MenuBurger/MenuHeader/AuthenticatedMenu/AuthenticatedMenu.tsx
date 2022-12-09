import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import UserInfo from "../../../UserInfo/UserInfo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MenuHeaderItem, {MenuHeaderItemVariants} from "../MenuHeaderItem/MenuHeaderItem";

import {Routes} from "../../../../../../../constants/routes";
import {setUserAction} from "../../../../../../../store/reducers/userReducer";

import styles from "../MenuHeader.module.css"

interface IMenuItem {
    title: string
    action: () => void
}

interface AuthenticatedMenuProps {
    userName: string
    menuItems: IMenuItem[]
}

const AuthenticatedMenu: FC<AuthenticatedMenuProps> = (
    {
        userName= "",
        menuItems= []
    }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        dispatch(setUserAction(null));

        navigate(Routes.signIn);
    }

    return (
        <>
            <div className={styles.menuWrapper}>
                <UserInfo userName={userName} />
                {menuItems.map(item =>
                    <MenuHeaderItem  key={item.title} onClick={item.action}>{item.title}</MenuHeaderItem>)
                }
            </div>
            <div className={styles.menuBottomBlock}>
                <ThemeSwitcher />
                <MenuHeaderItem
                    onClick={handleLogOut}
                    variant={MenuHeaderItemVariants.secondary}
                >
                    Log Out
                </MenuHeaderItem>
            </div>
        </>
    );
};

export default AuthenticatedMenu;