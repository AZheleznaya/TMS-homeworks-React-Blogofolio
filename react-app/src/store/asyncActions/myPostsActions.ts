import {setMyPostsAction} from "../reducers/myPostsReducer";
import {responseToJSONHandler} from "../../utils/responseUtil";

export const setMyPosts = (image: string, text: string, title: string, id: number, date: string):any =>{
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/blog/posts/my_posts/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({image, text, title, id, date})
        })
            .then(responseToJSONHandler)
            .then(myPosts => dispatch(setMyPostsAction(myPosts)))
            .catch(console.error)
    }
}