import React, {ChangeEventHandler, FC, useState} from 'react';
import {useNavigate} from "react-router-dom";

import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
import PageWrapper from "../../components/common/PageWrapper/PageWrapper";

import {Routes} from "../../constants/routes";
import {PageProps} from "../../types/page";

const ResetPassword: FC<PageProps> = ({title= ""}) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");

    const handleRedirectToHome = () => navigate(Routes.main);

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email}}) => setEmail(email);

    const resetPasswordFormConfig: IFormProps = {
        topText: `You will receive an email <b>example@gmail.com</b> with a link to reset your password!`,
        page: Routes.resetPassword,
        inputs: [{
            id: "email",
            name: "userEmail",
            value: email,
            onChange: handleSetEmail,
            title: "Email",
            placeholder: "example@gmail.com"
        }],
        actionButton: {
            onSubmit: handleRedirectToHome,
            title: "Go to home"
        }
    }

    return (
        <PageWrapper title={title}>
            <AuthForm {...resetPasswordFormConfig} />
        </PageWrapper>
    );
};

export default ResetPassword;