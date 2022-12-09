import React, {ChangeEventHandler, FC, useState} from 'react';
import {useNavigate} from "react-router-dom";

import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
import PageWrapper from "../../components/common/PageWrapper/PageWrapper";

import {Routes} from "../../constants/routes";
import {PageProps} from "../../types/page";

const ResetPasswordEmail: FC<PageProps> = ({title= ""}) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");

    const handleRedirectToReset = () => navigate(Routes.resetPassword);

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email}}) => setEmail(email);

    const resetPasswordEmailFormConfig: IFormProps = {
        page: Routes.resetPasswordEmail,
        inputs: [{
            id: "email",
            name: "userEmail",
            value: email,
            onChange: handleSetEmail,
            title: "Email",
            placeholder: "Your email"
        }],
        actionButton: {
            onSubmit: handleRedirectToReset,
            title: "Reset"
        }
    }

    return (
        <PageWrapper title={title}>
            <AuthForm {...resetPasswordEmailFormConfig} />
        </PageWrapper>
    );
};

export default ResetPasswordEmail;