import React, {FC, useState, useEffect, Suspense} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Tabs from "../../components/common/Tabs/Tabs";
import LazyLoader from "../../components/common/LazyLoader/LazyLoader";
import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import Pagination from "../../components/common/Pagination/Pagination";

import {PageProps} from "../../types/page";
import {setCardsAction} from "../../store/reducers/selectedCardReducer";
import {IPostCard} from "../../components/common/PostList/PostCard/PostCard";
import {usePagination} from "../../context/PaginationContext";
import PostsService from "../../services/postsService";

import {TABS_CONFIG} from "../../components/common/Tabs/TabsConfig";

const PostList = React.lazy(() => import("../../components/common/PostList/PostList"));

const Main: FC<PageProps> = ({title= ""}) => {

    const dispatch = useDispatch();

    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const [posts, setPosts] = useState<IPostCard[]>([]);

    const {cards} = useSelector((state: any) => state.selectedCard);
    const {myPosts} = useSelector((state: any) => state.myPosts);
    const {handleGetPaginationParams, pageResults, activePage} = usePagination();

    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    const setReduxPosts = (payload: IPostCard[]) => {
        dispatch(setCardsAction(payload));
    }

    const getPosts = async () => {
        await handleGetPaginationParams(PostsService.getPosts.bind(null, activePage === 1 ? 11 : 11))
    }

    const filterPosts = () => {
        switch (activeTabItem) {
            case 2:
                return setPosts(cards.filter((card: IPostCard) => card.favorite));

            case 3:
                return setPosts(myPosts)

            default:
                setPosts(cards)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        setReduxPosts(pageResults)
    }, [pageResults])

    useEffect(() => {
        setPosts(cards);
    }, [cards])

    useEffect(() => {
        filterPosts();
    }, [activeTabItem, cards])

    return (
        <PageWrapper title={title}>
            <Tabs config={TABS_CONFIG} activeTabItem={activeTabItem} onClick={handleSetActiveTabItem} />
            <Suspense fallback={<LazyLoader />}>
                <PostList postCards={posts} />
                <Pagination items={posts} />
            </Suspense>
        </PageWrapper>
    );
};

export default Main;
