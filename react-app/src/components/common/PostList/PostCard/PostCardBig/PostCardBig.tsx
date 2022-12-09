import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import Actions, {ActionsVariant} from "../../../Actions/Actions";

import {IPostCard} from "../PostCard";
import {useTheme} from "../../../../../context/ThemeContext";
import {selectCardAction} from "../../../../../store/reducers/selectedCardReducer";

import styles from "./PostCardBig.module.css";

const PostCardBig: FC<IPostCard> = (props) => {

    const { id = 1, title, date, text, image } = props;

    const {isDarkTheme} = useTheme();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePostCardOpen = () => navigate(`/main/${id}`);

    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    return (
        <div className={styles.bigCard}>
            <div className={styles.bigCardWrapper}>
                <div className={styles.bigCardContent}>
                    <div className={styles.bigCardDate}>{date}</div>
                    <h2
                        className={`${styles.bigCardTitle} ${isDarkTheme && styles.darkTitle}`}
                        onClick={handlePostCardOpen}
                    >
                        {title}
                    </h2>
                    <div className={styles.bigCardDescription}>{text}</div>
                </div>
                <div className={styles.bigCardImage} onClick={handleCardSelect}>
                    {!!image && <img className={styles.bigImage} src={image} alt="bigCardImage" />}
                </div>
            </div>
            <Actions post={props} variant={ActionsVariant.forMain} onClick={handleCardSelect} />
        </div>
    );
};

export default PostCardBig;