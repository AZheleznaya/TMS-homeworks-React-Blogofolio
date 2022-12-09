import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import Actions, {ActionsVariant} from "../../../Actions/Actions";

import {IPostCard} from "../PostCard";
import {useTheme} from "../../../../../context/ThemeContext";
import {selectCardAction} from "../../../../../store/reducers/selectedCardReducer";

import styles from "./PostCardSmall.module.css";

const PostCardSmall: FC<IPostCard> = (props) => {

    const { id = 1, title, date, image} = props;

    const {isDarkTheme} = useTheme();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePostCardOpen = () => navigate(`/main/${id}`);

    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    return (
        <div className={styles.smallCard}>
            <div className={styles.smallCardWrapper}>
                <div className={styles.smallCardContent}>
                    <div className={styles.smallCardDate}>{date}</div>
                    <h2
                        className={`${styles.smallCardTitle} ${isDarkTheme && styles.darkTitle}`}
                        onClick={handlePostCardOpen}
                    >
                        {title}
                    </h2>
                </div>
                <div className={styles.smallCardImage} onClick={handleCardSelect}>
                    {!!image && <img className={styles.smallImage} src={image} alt="smallCardImage" />}
                </div>
            </div>
            <Actions post={props} variant={ActionsVariant.forMain} onClick={handleCardSelect} />
        </div>
    );
};

export default PostCardSmall;