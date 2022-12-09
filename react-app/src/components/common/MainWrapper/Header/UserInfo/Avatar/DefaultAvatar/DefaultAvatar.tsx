import React, {FC} from 'react';

import DefaultIcon from "../../../../../../../assets/image/Default-User.svg";

import styles from "../Avatar.module.css";

const DefaultAvatar: FC = () => {
    return (
        <div className={styles.defaultAvatar}>
            <img src={DefaultIcon} alt="DefaultAvatar" />
        </div>
    );
};

export default DefaultAvatar;