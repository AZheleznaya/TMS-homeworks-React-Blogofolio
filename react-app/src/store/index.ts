import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {selectedCardReducer} from "./reducers/selectedCardReducer";
import {postReducer} from "./reducers/postReducer";
import {myPostsReducer} from "./reducers/myPostsReducer";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
    selectedCard: selectedCardReducer,
    post: postReducer,
    myPosts: myPostsReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));