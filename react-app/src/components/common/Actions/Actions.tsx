import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";

import ActionItem from "./ActionItem/ActionItem";
import PopupList from "./PopupList/PopupList";

import {useTheme} from "../../../context/ThemeContext";
import {IPostCard} from "../PostList/PostCard/PostCard";
import {updateCardAction} from "../../../store/reducers/selectedCardReducer";

import Like from "../../../assets/image/Icon-Like.svg";
import LikeWhite from "../../../assets/image/Icon-LikeWhite.svg";
import Dislike from "../../../assets/image/Icon-Dislike.svg";
import DislikeWhite from "../../../assets/image/Icon-DislikeWhite.svg";
import Bookmark from "../../../assets/image/Icon-Bookmark.svg";
import BookmarkWhite from "../../../assets/image/Icon-BookmarkWhite.png";
import BookmarkPaintedDark from "../../../assets/image/Icon-Bookmark-PaintedDark.svg";
import BookmarkPaintedWhite from "../../../assets/image/Icon-Bookmark-PaintedWhite.svg";
import More from "../../../assets/image/Icon-More.svg";
import MoreWhite from "../../../assets/image/Icon-MoreWhite.svg";

import styles from "./Actions.module.css";

export enum ActionsVariant {
    forMain = "forMain",
    forContent = "forContent"
}

interface ActionProps {
    post: IPostCard
    variant?: ActionsVariant
    className?: string
    onClick?: any
    src?: string
    alt?: string
}

const Actions: FC<ActionProps> = ({post, variant, onClick}) => {

    const {isDarkTheme, isLightTheme} = useTheme();

    const dispatch = useDispatch();

    const [openPopupList, setOpenPopupList] = useState<boolean>(false);

    const handleLikePost = () => {
        dispatch(updateCardAction({...post, like: !post.like, dislike: !post.dislike && post.dislike, likes: 1, dislikes: 0}));
    }

    const handleDislikePost = () => {
        dispatch(updateCardAction({...post, dislike: !post.dislike, like: !post.like && post.like, dislikes: 1, likes: 0}));
    }

    const handleAddToFavoritePost = () => {
        dispatch(updateCardAction({...post, favorite: !post.favorite}));
    }

    const handleToggleMoreButton = () => setOpenPopupList(prevState => !prevState);

    const handleDeleteCard = () => console.log("delete")

    const listItems = [{title: "Edit", action: onClick}, {title: "Delete", action: handleDeleteCard}]

    return (
        <div className={styles.wrapper}>
            {variant === ActionsVariant.forMain ?
                <div className={styles.actionsWrapper}>
                    <div className={styles.actionsThumbs}>
                        <ActionItem icon={isLightTheme ? Like : LikeWhite} onClick={handleLikePost} />
                        <div className={styles.likeField}>
                            {!!post.like && <p className={`${styles.likeCounter} ${isDarkTheme && styles.dark}`}>
                                {post.likes}
                            </p>}
                        </div>
                        <ActionItem icon={isLightTheme ? Dislike : DislikeWhite} onClick={handleDislikePost} />
                        <div className={styles.dislikeField}>
                            {!!post.dislike && <p className={`${styles.dislikeCounter} ${isDarkTheme && styles.dark}`}>
                                {post.dislikes}
                            </p>}
                        </div>
                    </div>
                    <div className={styles.moreActions}>
                        <ActionItem
                            onClick={handleAddToFavoritePost}
                            icon={isDarkTheme && post.favorite ? BookmarkPaintedWhite : isDarkTheme ? BookmarkWhite : post.favorite ? BookmarkPaintedDark : Bookmark}
                        />
                        <ActionItem
                            icon={isLightTheme ? More : MoreWhite}
                            onClick={handleToggleMoreButton}
                            className={styles.moreIcon}
                        >
                            {openPopupList && <PopupList popupListItems={listItems} />}
                        </ActionItem>
                    </div>
                </div>
                :
                <div className={styles.actionsWrapper}>
                    <div className={styles.actionsThumbs}>
                        <ActionItem
                            icon={`${post.like ? LikeWhite : Like}`}
                            onClick={handleLikePost}
                            className={`${styles.likeContent} ${post.like ? styles.likeContentActive : ""}`}
                        />
                        <ActionItem
                            icon={`${post.dislike ? DislikeWhite : Dislike}`}
                            onClick={handleDislikePost}
                            className={`${styles.dislikeContent} ${post.dislike ? styles.dislikeContentActive : ""}`}
                        />
                    </div>
                    <div className={styles.bookmarkAction}>
                        <ActionItem
                            icon={`${post.favorite ? BookmarkWhite : Bookmark}`}
                            onClick={handleAddToFavoritePost}
                            className={`${styles.bookmarkContent} ${post.favorite ? styles.bookmarkContentActive : ""}`}
                            text="Add to favorites"
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default Actions;