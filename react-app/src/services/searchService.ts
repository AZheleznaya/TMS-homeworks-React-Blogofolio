import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import {IPostCard} from "../components/common/PostList/PostCard/PostCard";

export interface SearchResults {
    count: number
    next: string | null
    previous: string | null
    results: IPostCard[]
}

export default class SearchService {
    static async getSearchResults(search: string = "", limit: number = 6, offset: number = 0): Promise<SearchResults> {
        return await HTTPService.get(`https://studapi.teachmeskills.by/blog/posts?search=${search}&limit=${limit}&offset=${offset}`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async getSearchPage(url: string): Promise<SearchResults> {
        return await HTTPService.get(url)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}