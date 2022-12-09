import React, {FC, useMemo} from 'react';
import {Link} from "react-router-dom";

import Input, {InputProps} from "../Input/Input";
import Button from "../Button/Button";

import {Routes} from "../../../constants/routes";
import {useTheme} from "../../../context/ThemeContext";

import styles from "./AuthForm.module.css";

export interface IFormProps {
    page: Routes
    actionButton: {
        title: string,
        onSubmit: () => void
    }
    inputs?: InputProps[]
    topText?: string
}

const AuthForm: FC<IFormProps> = (
    {
        inputs= [],
        topText= "",
        page,
        actionButton
    }) => {

    const {isDarkTheme} = useTheme();

    const isSignIn = useMemo(() => page === Routes.signIn, [page]);
    const isSignUp = useMemo(() => page === Routes.signUp, [page]);

    return (
        <form className={styles.formWrapper}>
            {!!topText && <p
                className={`
                    ${styles.topText} 
                    ${page === Routes.resetPassword ? styles.resetPasswordText : ""}
                    ${isDarkTheme && styles.dark}`}
                dangerouslySetInnerHTML={{__html: topText}}
            />}
            {inputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
            {isSignIn && (
                <Link
                    to={Routes.resetPasswordEmail}
                    className={`${styles.forgotPassword} ${isDarkTheme && styles.dark}`}
                >
                    Forgot password?
                </Link>
            )}
            <Button
                onClick={actionButton.onSubmit}
                className={styles.submitButton}
            >
                {actionButton.title}
            </Button>
            {(isSignIn || isSignUp) && (
                <div className={styles.bottomText}>
                    <p className={`${styles.text} ${isDarkTheme && styles.dark}`}>
                        {isSignIn ? "Don’t have an account?" : "Already have an account?"}
                        <Link
                            to={isSignIn ? Routes.signUp : Routes.signIn}
                            className={`${styles.link} ${isDarkTheme && styles.darkLink}`}
                        >
                            {isSignIn ? "Sign Up" : "Sign In"}
                        </Link>
                    </p>
                </div>
            )}
        </form>
    );
};

export default AuthForm;