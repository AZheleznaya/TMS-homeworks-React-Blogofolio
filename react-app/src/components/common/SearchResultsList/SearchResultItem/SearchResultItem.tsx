import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import Actions, {ActionsVariant} from "../../Actions/Actions";

import {useTheme} from "../../../../context/ThemeContext";
import {IPostCard} from "../../PostList/PostCard/PostCard";

import styles from "./SearchResultItem.module.css";

const SearchResultItem: FC<IPostCard> = (props) => {

    const navigate = useNavigate();

    const {isDarkTheme} = useTheme();

    const {id = 1, title, date, image} = props;

    const {cards} = useSelector((state: any) => state.selectedCard);

    const selectedPost = cards.find((contentPost: IPostCard) => contentPost.id === +id);

    const handlePostCardOpen = () => navigate(`/main/${id}`);

    return (
        <div className={styles.searchItemContainer}>
            <div className={styles.searchItemWrapper}>
                <img src={image} className={styles.searchItemImage} onClick={handlePostCardOpen} alt="searchImage" />
                <div className={styles.searchItemContent}>
                    <p className={styles.searchItemDate}>{date}</p>
                    <h2 className={`${styles.searchItemTitle} ${isDarkTheme && styles.dark}`} onClick={handlePostCardOpen}>
                        {title}
                    </h2>
                </div>
            </div>
            {selectedPost
                ?
                <Actions post={selectedPost} variant={ActionsVariant.forMain} />
                :
                <Actions post={props} variant={ActionsVariant.forMain} />
            }
        </div>
    );
};

export default SearchResultItem;