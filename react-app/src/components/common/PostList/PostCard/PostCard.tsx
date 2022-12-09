import React, {FC, MouseEventHandler} from 'react';
import {useDispatch} from "react-redux";

import PostCardBig from "./PostCardBig/PostCardBig";
import PostCardMedium from "./PostCardMedium/PostCardMedium";
import PostCardSmall from "./PostCardSmall/PostCardSmall";

import {selectCardAction} from "../../../../store/reducers/selectedCardReducer";

export enum PostCardSizes {
    l = "l",
    m = "m",
    s = "s"
}

export interface IPostCard {
    id: number
    date: string
    title: string
    text: string
    image?: string
    onClick?: MouseEventHandler
    like?: boolean,
    dislike?: boolean,
    favorite?: boolean,
    likes?: number,
    dislikes?: number
    author?: number
    lesson_num?: number
}

export interface IPostCardVariant {
    variant: PostCardSizes
}

// @ts-ignore
const PostCard: FC<IPostCard & IPostCardVariant> = (props) => {

    const dispatch = useDispatch();

    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    const renderPostCard = () => {
        switch (props.variant) {
            case "s":
                return <PostCardSmall {...props} onClick={handleCardSelect} />
            case "m":
                return <PostCardMedium {...props} onClick={handleCardSelect} />
            case "l":
                return <PostCardBig {...props} onClick={handleCardSelect} />
        }
    };

    return renderPostCard();
};

export default PostCard;