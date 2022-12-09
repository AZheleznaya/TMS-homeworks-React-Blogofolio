import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Actions, {ActionsVariant} from "../Actions/Actions";

import {useTheme} from "../../../context/ThemeContext";
import {IPostCard} from "../PostList/PostCard/PostCard";
import {getPostCards} from "../../../store/asyncActions/postsActions";

import styles from "./ContentPost.module.css";

export interface ContentPostProps {
    contentPost: IPostCard
}

const ContentPost: FC<ContentPostProps> = ({contentPost}) => {

     const dispatch = useDispatch();

     const {isDarkTheme} = useTheme();

     const {id = 1} = useParams();

     const {cards} = useSelector((state: any) => state.selectedCard);

     const selectedPost = cards.find((contentPost: IPostCard) => contentPost.id === +id);

     const getCards = async () => {
         await dispatch(getPostCards())
     }

     useEffect(() => {
         if (!cards.length) {
             getCards()
         }
     }, [])

    return (
        <div className={styles.contentPostWrapper}>
            <>
                <h2 className={`${styles.contentPostTitle} ${isDarkTheme && styles.dark}`}>
                    {!!contentPost && contentPost.title}
                </h2>
                <img  className={styles.contentPostImage} src={!!contentPost ? contentPost.image : "error"} alt="post" />
                <div className={styles.contentPostDescription}>
                    <div className={`${styles.contentPostText} ${isDarkTheme && styles.dark}`}>
                        {!!contentPost && contentPost.text}
                    </div>
                    {selectedPost
                        ?
                        <Actions variant={ActionsVariant.forContent} post={selectedPost} />
                        :
                        <Actions variant={ActionsVariant.forContent} post={contentPost} />
                    }
                </div>
            </>
        </div>
    );
};

export default ContentPost;