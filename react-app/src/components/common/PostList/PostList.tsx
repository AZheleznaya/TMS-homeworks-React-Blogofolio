import React, {FC} from 'react';

import PostCard, {IPostCard, PostCardSizes} from "./PostCard/PostCard";

import styles from "./PostList.module.css";

export interface PostListProps {
    postCards: IPostCard[]
}

const PostList: FC<PostListProps> = ({postCards= []}) => {

    const getPostCardSize = (index: number) => {
        if (index <= 4) {
            return PostCardSizes.m
        } else {
            return PostCardSizes.s
        }
    };

    return (
        <div className={styles.postListWrapper}>
            <div className={styles.postListLeft}>
                <div className={styles.postListMedium}>
                    {postCards
                        .map((postCard: IPostCard) =>
                            <PostCard key={postCard.id} {...postCard} variant={PostCardSizes.l} />)
                        .filter((postCard, index) => index === 0)
                    }
                    {postCards
                        .map((postCard: IPostCard, index) =>
                            <PostCard key={postCard.id} {...postCard} variant={getPostCardSize(index)} />)
                        .filter((postCard, index) => index >= 1 && index <= 4)
                    }
                </div>
            </div>
            <div className={styles.postListRight}>
                {postCards
                    .map((postCard: IPostCard, index) =>
                        <PostCard key={postCard.id} {...postCard} variant={getPostCardSize(index)} />)
                    .filter((postCard, index) => index >= 5)
                }
            </div>
        </div>
    );
};

export default PostList;