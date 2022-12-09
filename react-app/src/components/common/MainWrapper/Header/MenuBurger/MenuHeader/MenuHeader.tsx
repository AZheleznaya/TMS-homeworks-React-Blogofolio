import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import AuthenticatedMenu from "./AuthenticatedMenu/AuthenticatedMenu";
import NonAuthenticatedMenu from "./NonAuthenticatedMenu/NonAuthenticatedMenu";

import {Routes} from "../../../../../../constants/routes";

import styles from "./MenuHeader.module.css";

interface MenuHeaderProps {
    userName?: string
}

const MenuHeader: FC<MenuHeaderProps> = ({userName= ""}) => {

    const navigate = useNavigate();

    const {user} = useSelector((state: any) => state.user);

    const handleRedirectToHome = () => navigate(Routes.main);
    const handleRedirectToAddPost = () => navigate(Routes.addPost);

    const nonAuthMenuItems = [{title: "Home", action: handleRedirectToHome}];
    const authMenuItems = [...nonAuthMenuItems, {title: "Add post", action: handleRedirectToAddPost}]

    return (
        <div className={styles.menuHeaderWrapper}>
            {!!user?.username
                ?
                <AuthenticatedMenu userName={userName} menuItems={authMenuItems} />
                :
                <NonAuthenticatedMenu menuItems={nonAuthMenuItems} />
            }
        </div>
    );
};

export default MenuHeader;