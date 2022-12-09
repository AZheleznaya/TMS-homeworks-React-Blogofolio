import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import Avatar from "./Avatar/Avatar";

import styles from "./UserInfo.module.css";

interface UserInfoProps {
    userName?: string
    avatarUrl?: string
    className?: string
}

const UserInfo: FC<UserInfoProps> = (
    {
        avatarUrl= "",
        className= ""
    }) => {

    const {user} = useSelector((state: any) => state.user);

    return (
        <div className={`${styles.userInfoWrapper} ${!!user?.username && styles.user} ${className}`}>
            <Link to={!!user?.username ? "/main" : "/signin"} className={styles.linkNoneDecoration}>
                <div className={styles.userInfo}>
                    <Avatar userName={user?.username} url={avatarUrl} />
                    {!!user?.username && <div className={styles.userInfo}>{(user?.username).split(/(?=[A-Z])/).join(" ")}</div>}
                </div>
            </Link>
        </div>
    );
};

export default UserInfo;