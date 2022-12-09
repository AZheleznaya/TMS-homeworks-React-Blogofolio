import React, {ChangeEventHandler, FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";

import {Routes} from "../../constants/routes";
import {PageProps} from "../../types/page";
import {handleUserSignIn} from "../../store/asyncActions/userActions";

interface ISignInForm {
    email: string
    password: string
}

const SignIn: FC<PageProps> = ({title= ""}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signInForm, setSignInForm] = useState<ISignInForm>({email: "", password: ""});

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email}}): void =>
        setSignInForm(prevState => ({...prevState, email}));
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password}}): void =>
        setSignInForm(prevState => ({...prevState, password}));

    const handleUserNavigate = () => navigate(Routes.main);

    // const handleUserTokenCreate = async () => {
    //     const result = await TokenService.getToken(signInForm.email, signInForm.password);
    //
    //     for (let item in result) {
    //         localStorage.setItem(item, result[item])
    //     }
    // }
    //
    // const handleUpdateAccessToken = async () => {
    //     const refresh = localStorage.getItem("refresh");
    //
    //     if (!!refresh) {
    //         const {accessToken} = await TokenService.updateAccessToken(refresh);
    //         localStorage.setItem("access", accessToken);
    //         return accessToken
    //     }
    // }
    //
    // const handleVerifyToken = async () => {
    //     const token = localStorage.getItem("access");
    //     let result = {
    //         token: token,
    //         valid: false
    //     }
    //
    //     if (!!token) {
    //         await TokenService.verifyToken(token)
    //         result.valid = true
    //     }
    //
    //     return result
    // }
    //
    // const handleUserInformationCall = async (token: string) => {
    //     return await UserService.getUser(token)
    // }
    //
    // const handleUserInformationGet = async () => {
    //     const {valid, token} = await handleVerifyToken();
    //     let user;
    //
    //     if (valid && token) {
    //         user = await handleUserInformationCall(token)
    //     } else {
    //         const token = await handleUpdateAccessToken();
    //         user = await handleUserInformationCall(token)
    //     }
    //
    //     return user
    // }

    const handleSignIn = async () => {
        try {
            // @ts-ignore
            dispatch(await handleUserSignIn(signInForm.email, signInForm.password, handleUserNavigate))
        } catch (e) {
            console.log(e)
        }
    }

    const signInFormConfig: IFormProps = {
        page: Routes.signIn,
        inputs: [
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: signInForm.email,
                onChange: handleSetEmail,
                placeholder: "Your email"
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: signInForm.password,
                onChange: handleSetPassword,
                type: "password",
                placeholder: "Your password"
            }
        ],
        actionButton: {
            onSubmit: handleSignIn,
            title: "Sign In"
        }
    };

    return (
        <PageWrapper title={title}>
            <AuthForm {...signInFormConfig} />
        </PageWrapper>
    );
};

export default SignIn;

