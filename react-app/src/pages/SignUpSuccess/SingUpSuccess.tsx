import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";

import {PageProps} from "../../types/page";
import {Routes} from "../../constants/routes";

const SingUpSuccess: FC<PageProps> = ({title= ""}) => {

    const navigate = useNavigate();

    const handleRedirectToHome = () => navigate(Routes.main);

    const SignUpSuccessFormConfig: IFormProps = {
        page: Routes.signUpSuccess,
        topText: `Email confirmed. <br /> Your registration is now completed`,
        actionButton: {
            onSubmit: handleRedirectToHome,
            title: "Go to home"
        }
    }

    return (
        <PageWrapper title={title}>
            <AuthForm {...SignUpSuccessFormConfig} />
        </PageWrapper>
    );
};

export default SingUpSuccess;