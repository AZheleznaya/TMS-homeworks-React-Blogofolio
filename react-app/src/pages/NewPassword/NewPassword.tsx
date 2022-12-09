import React, {ChangeEventHandler, FC, useState} from 'react';

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";

import {Routes} from "../../constants/routes";
import {PageProps} from "../../types/page";

interface INewPasswordForm {
    newPassword: string
    confirmPassword: string
}

const NewPassword: FC<PageProps> = ({title= ""}) => {

    const [newPasswordForm, setNewPasswordForm] = useState<INewPasswordForm>({
        newPassword: "",
        confirmPassword: ""
    });

    const handleSetNewPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: newPassword}}) =>
        setNewPasswordForm(prevState => ({...prevState, newPassword}));

    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword}}) =>
        setNewPasswordForm(prevState => ({...prevState, confirmPassword}));

    const handleSentLink = () => console.log("Link was sent");

    const newPasswordFormConfig: IFormProps = {
        page: Routes.newPassword,
        inputs: [
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: newPasswordForm.newPassword,
                onChange: handleSetNewPassword,
                type: "password",
                placeholder: "Your password"
            },
            {
                title: "Confirm password",
                id: "confirmPassword",
                name: "confirmPassword",
                value: newPasswordForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                type: "password",
                placeholder: "Confirm your password"
            }
        ],
        actionButton: {
            onSubmit: handleSentLink,
            title: "Set password"
        }
    };

    return (
        <PageWrapper title={title}>
            <AuthForm {...newPasswordFormConfig} />
        </PageWrapper>
    );
};

export default NewPassword;