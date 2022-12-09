import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import ContentPost from "../../components/common/ContentPost/ContentPost";
import LazyLoader from "../../components/common/LazyLoader/LazyLoader";

import {PageProps} from "../../types/page";
import {IPostCard} from "../../components/common/PostList/PostCard/PostCard";
import {getPost} from "../../store/asyncActions/postActions";
import {getPostAction} from "../../store/reducers/postReducer";
import PaginationPost from "../../components/common/Pagination/PaginationPost/PaginationPost";

const Content: FC<PageProps> = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [postCard, setPostCard] = useState<IPostCard | null>(null);
    const [nextTitle, setNextTitle] = useState<string>("");
    const [previousTitle, setPreviousTitle] = useState<string>("");

    const {id = 1} = useParams();
    const {cards} = useSelector((state: any) => state.selectedCard);
    const {post} = useSelector((state: any) => state.post);

    const selectedCard = cards.find((postCard: IPostCard) => postCard.id === +id);

    const nextPost = cards.find((postCard: IPostCard, index: number) => ((cards.indexOf(selectedCard) + 1) === index));

    const previousPost = cards.find((postCard: IPostCard, index: number) => ((cards.indexOf(selectedCard) - 1) === index));

    const getPostCard = async () => {
        await dispatch(getPost(+id));
    }

    const handleNextPost = () => navigate(`/main/${nextPost?.id}`);
    const handlePreviousPost = () => navigate(`/main/${previousPost?.id}`);

    useEffect(() => {
        dispatch(getPostAction(null))
        getPostCard()
    }, [id]);

    useEffect(() => {
        setPostCard(post)
        setNextTitle(!!nextPost?.title ? nextPost?.title : null)
        setPreviousTitle(!!previousPost?.title ? previousPost?.title : null)
    })

    if (postCard) {
        return (
            <PageWrapper>
                <ContentPost contentPost={postCard} />
                <PaginationPost
                    previousTitle={previousTitle}
                    onClickPrevious={handlePreviousPost}
                    nextTitle={nextTitle}
                    onClickNext={handleNextPost}
                />
            </PageWrapper>
        );
    } else {
        return (
            <LazyLoader />
        )
    }
};

export default Content;