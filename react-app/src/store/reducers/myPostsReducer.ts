import {Reducer} from "redux";

import {IPostCard} from "../../components/common/PostList/PostCard/PostCard";

const SET_MY_POSTS = "SET_MY_POSTS";

interface IInitialState {
    myPosts: IPostCard[]
}

const initialState: IInitialState = {
    myPosts: []
}

export const myPostsReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_POSTS:
            return {...state, myPosts: action.payload}

        default:
            return state
    }
}

export const setMyPostsAction = (payload: any) => ({type: SET_MY_POSTS, payload});