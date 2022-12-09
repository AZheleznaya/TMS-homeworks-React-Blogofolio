import {FC} from 'react';
import {RouteObject} from "react-router-dom";

import Main from "../pages/Main/Main";
import Content from "../pages/Content/Content";
import AddPost from "../pages/AddPost/AddPost";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import SingUpSuccess from "../pages/SignUpSuccess/SingUpSuccess";
import ResetPasswordEmail from "../pages/ResetPasswordEmail/ResetPasswordEmail";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import SignUpConfirmation from "../pages/SignUpConfirmation/SignUpConfirmation";
import NewPassword from "../pages/NewPassword/NewPassword";
import SearchResults from "../pages/SearchResults/SearchResults";

import {PageProps} from "../types/page";

export interface IRoute extends RouteObject {
    path: string
    Element: FC<PageProps>
    title?: string
}

export enum Routes {
    main = "/main",
    content = "/main/:id",
    addPost = "/add-post",
    signIn = "/signin",
    signUp = "/signup",
    signUpSuccess = "/signup/success",
    signUpConfirmation = "/activate/:uid/:token",
    resetPasswordEmail = "/reset-password",
    resetPassword = "/reset-password/reset",
    newPassword = "/new-password",
    search = "/search"
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.main, Element: Main, title: "Blog"},
    {path: Routes.content, Element: Content},
    {path: Routes.signIn, Element: SignIn, title: "Sign In"},
    {path: Routes.signUp, Element: SignUp, title: "Sign Up"},
    {path: Routes.signUpSuccess, Element: SingUpSuccess, title: "Success"},
    {path: Routes.signUpConfirmation, Element: SignUpConfirmation, title: "Registration confirmation"},
    {path: Routes.resetPasswordEmail, Element: ResetPasswordEmail, title: "Reset password"},
    {path: Routes.resetPassword, Element: ResetPassword, title: "Reset password"},
    {path: Routes.newPassword, Element: NewPassword, title: "New password"},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
    {path: Routes.addPost, Element: AddPost, title: "Add post"},
    {path: Routes.search, Element: SearchResults}
]
