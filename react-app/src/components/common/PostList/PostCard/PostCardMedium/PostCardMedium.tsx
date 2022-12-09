import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import Actions, {ActionsVariant} from "../../../Actions/Actions";

import {IPostCard} from "../PostCard";
import {useTheme} from "../../../../../context/ThemeContext";
import {selectCardAction} from "../../../../../store/reducers/selectedCardReducer";

import styles from "./PostCardMedium.module.css";

const PostCardMedium: FC<IPostCard> = (props) => {

    const { id = 1, title, date, image} = props;

    const {isDarkTheme} = useTheme();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePostCardOpen = () => navigate(`/main/${id}`);

    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    return (
        <div className={styles.mediumCardWrapper}>
            <div className={styles.mediumCardImage} onClick={handleCardSelect}>
                {!!image && <img className={styles.mediumImage} src={image} alt="mediumCardImage" />}
            </div>
            <div className={styles.mediumCardContent}>
                <div className={styles.mediumCardDate}>{date}</div>
                <h2
                    className={`${styles.mediumCardTitle} ${isDarkTheme && styles.darkTitle}`}
                    onClick={handlePostCardOpen}
                >
                    {title}
                </h2>
            </div>
            <Actions post={props} variant={ActionsVariant.forMain} onClick={handleCardSelect} />
        </div>
    );
};

export default PostCardMedium;