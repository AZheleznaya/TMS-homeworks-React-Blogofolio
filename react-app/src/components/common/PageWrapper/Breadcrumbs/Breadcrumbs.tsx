import React, {FC, useMemo} from 'react';
import {Link, matchPath, PathMatch, useLocation, useParams} from "react-router-dom";

import {useTheme} from "../../../../context/ThemeContext";
import {IRoute, PUBLIC_ROUTES, Routes} from "../../../../constants/routes";

import styles from "./Breadcrumbs.module.css";

const Breadcrumbs: FC = () => {

    const params = useParams();
    const {pathname} = useLocation();
    const {isDarkTheme} = useTheme();

    function matchRouteDefinitions(definitions: IRoute[]): PathMatch[] {
        const crumbs: PathMatch[] = [];

        definitions.forEach((definition) => {
            const match = matchPath(
                {path: definition.path, end: false},
                pathname
            );

            if (match) {
                crumbs.push(match);
            }
        });

        return crumbs
    }

    const matches = useMemo(() => matchRouteDefinitions(PUBLIC_ROUTES), [pathname]);

    const isAuthPage = useMemo(() => {
        switch (pathname) {
            case Routes["signIn"]:
            case Routes["signUp"]:
            case Routes["signUpSuccess"]:
            case Routes["signUpConfirmation"]:
            case Routes["resetPasswordEmail"]:
            case Routes["resetPassword"]:
            case Routes["newPassword"]:
                return true
            
            default:
                return false
        }
    }, [pathname]);

    const isPostPage = useMemo(() => matches[1]?.pattern.path === Routes.content, [pathname]);

    return (
        <div className={styles.breadcrumbs}>
            {isAuthPage
                ?
                <Link
                    className={`${styles.authLink} ${isDarkTheme && styles.dark}`}
                    to={Routes.main}
                >
                    Back to home
                </Link>
                :
                (<>
                    <Link
                        to={Routes.main}
                        className={`${styles.home} ${isDarkTheme && styles.dark}`}
                    >
                        Home
                    </Link>
                    <span className={styles.divider} />
                    <span className={styles.current}>{isPostPage ? `Post ${params?.id}` : "Add Post"}</span>
                </>
                )}
        </div>
    );
};

export default Breadcrumbs;