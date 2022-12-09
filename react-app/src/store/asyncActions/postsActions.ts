import {setCardsAction} from "../reducers/selectedCardReducer";
import {responseToJSONHandler} from "../../utils/responseUtil";

export const getPostCards = ():any => {
    return (dispatch: any) => {
        fetch("https://studapi.teachmeskills.by/blog/posts/?limit=1000", {
            method: "GET",
        })
            .then(responseToJSONHandler)
            .then(response => dispatch(setCardsAction(response.results)))
            .catch(console.error)
    }
}