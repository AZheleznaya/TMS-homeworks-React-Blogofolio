import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";

export interface IActivateUserBody {
    uid: string
    token: string
}

export default class UserService {
    static async getUser(token: string) {
        return await HTTPService.get("https://studapi.teachmeskills.by/auth/users/me/",{
            "Authorization": `Bearer ${token}`
        })
            .then(responseToJSONHandler)
    }

    static async activateUser(data: IActivateUserBody) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/users/activation/", data)
            .then(responseToJSONHandler)
    }

    static async createUser(email: string, password: string, username: string) {
        return await HTTPService.post("https://studapi.teachmeskills.by/auth/users/", {
            email,
            password,
            username
        })
            .then(responseToJSONHandler)
    }
}
