import React, {FC} from 'react';

import DefaultAvatar from "./DefaultAvatar/DefaultAvatar";
import UserAvatar, {UserAvatarProps} from "./UserAvatar/UserAvatar";

const Avatar: FC<UserAvatarProps> = (props) => {
    return !!props.userName ? <UserAvatar { ...props } /> : <DefaultAvatar />;
};

export default Avatar;