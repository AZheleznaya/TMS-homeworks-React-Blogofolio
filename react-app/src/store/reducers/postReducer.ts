import {Reducer} from "redux";

import {IPostCard} from "../../components/common/PostList/PostCard/PostCard";

enum postActions {
    GET_POST = "GET_POST"
}

interface IInitialState {
    post: IPostCard | null
}

const initialState: IInitialState = {
    post: null
};

export const postReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case postActions.GET_POST:
            return {post: action.payload};

        default:
            return state
    }
};

export const getPostAction = (payload: any) => ({type: postActions.GET_POST, payload});