import React, {FC, useEffect} from 'react';
import {useNavigate, useLocation, useParams} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";

import {PageProps} from "../../types/page";
import {Routes} from "../../constants/routes";
import UserService from "../../services/userService";

const SignUpConfirmation: FC<PageProps> = ({title= ""}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const {uid, token} = useParams();

    const handleRedirectToHome = () => navigate(Routes.main);

    const signUpConfirmationFormConfig: IFormProps = {
        page: Routes.signUpConfirmation,
        topText: `Please activate your account with the activation 
                  <br /> link in the email <b>${location.search.split("email=")[1]}</b>
                  <br /> Please, check your email`,
        actionButton: {
            onSubmit: handleRedirectToHome,
            title: "Go to home"
        }
    }

    // const handleUserActivate = async () => {
    //     if (uid && token) {
    //         await UserService.activateUser({uid, token})
    //     }
    // }

    useEffect(() => {
        if (uid && token) {
            UserService.activateUser({uid, token})
        }
    }, [])

    return (
        <PageWrapper title={title}>
            <AuthForm {...signUpConfirmationFormConfig} />
        </PageWrapper>
    );
};

export default SignUpConfirmation;