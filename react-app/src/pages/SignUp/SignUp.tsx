import React, {ChangeEventHandler, FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";

import {Routes} from "../../constants/routes";
import {PageProps} from "../../types/page";
import {handleUserSignUp} from "../../store/asyncActions/userActions";

interface ISignUpForm {
    name: string
    email: string
    password: string
    confirmPassword: string
}

const SignUp: FC<PageProps> = ({title= ""}) => {

    const [signUpForm, setSignUpForm] = useState<ISignUpForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const handleRedirectToSuccess = () => navigate(`${Routes.signUpConfirmation}?email=${signUpForm.email}`);

    const handleSubmit = async () => {
        //@ts-ignore
        await dispatch(handleUserSignUp(signUpForm.email, signUpForm.password, signUpForm.name));
    }

    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name}}): void =>
        setSignUpForm(prevState => ({...prevState, name}));
    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email}}): void =>
        setSignUpForm(prevState => ({...prevState, email}));
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password}}): void =>
        setSignUpForm(prevState => ({...prevState, password}));
    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword}}): void =>
        setSignUpForm(prevState => ({...prevState, confirmPassword}));

    const signUpFormConfig: IFormProps = {
        page: Routes.signUp,
        inputs: [
            {
                title: "Name",
                id: "name",
                name: "userName",
                value: signUpForm.name,
                onChange: handleSetName,
                placeholder: "Your name"
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: signUpForm.email,
                onChange: handleSetEmail,
                placeholder: "Your email"
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: signUpForm.password,
                onChange: handleSetPassword,
                type: "password",
                placeholder: "Your password"
            },
            {
                title: "Confirm password",
                id: "confirmPassword",
                name: "confirmPassword",
                value: signUpForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                type: "password",
                placeholder: "Confirm password"
            }
        ],
        actionButton: {
            onSubmit: handleSubmit,
            title: "Sign Up"
        }
    }

    return (
        <PageWrapper title={title}>
            <AuthForm {...signUpFormConfig} />
        </PageWrapper>
    );
};

export default SignUp;