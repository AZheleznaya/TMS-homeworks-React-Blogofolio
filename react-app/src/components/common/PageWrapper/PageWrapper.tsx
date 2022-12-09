import React, {FC, useMemo} from 'react';
import {useLocation} from "react-router-dom";

import Title from "./Title/Title";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

import {PageProps} from "../../../types/page";
import {WithChildren} from "../../../types/withChildren";
import {Routes} from "../../../constants/routes";

const PageWrapper: FC<PageProps & WithChildren> = ({title= "", children}) => {

    const {pathname} = useLocation();

    const hideBreadcrumbs = useMemo(() => {
        switch (pathname) {
            case Routes["main"]:
            case Routes["search"]:
                return true

            default:
                return false
        }
    }, [pathname])

    return (
        <>
            {!hideBreadcrumbs && <Breadcrumbs />}
            {!!title && <Title nameTitle={title} />}
            {children}
        </>
    );
};

export default PageWrapper;