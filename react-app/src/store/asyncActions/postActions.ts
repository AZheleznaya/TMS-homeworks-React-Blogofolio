import {getPostAction} from "../reducers/postReducer";
import {responseToJSONHandler} from "../../utils/responseUtil";

export const getPost = (id: number):any => {
    return (dispatch: any) => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            .then(responseToJSONHandler)
            .then(response => dispatch(getPostAction(response)))
            .catch(console.error)
    }
}