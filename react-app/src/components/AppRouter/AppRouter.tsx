import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";

import {handleGetUser} from "../../store/asyncActions/userActions";

import {PUBLIC_ROUTES, PRIVATE_ROUTES} from "../../constants/routes";

const AppRouter: FC = () => {

    const dispatch = useDispatch();

    // @ts-ignore
    const {isAuth}: boolean = useSelector(state => state?.user);

    const handleGetUserSession = async () => {
        const accessToken = localStorage.getItem("access") || "";
        const refreshToken = localStorage.getItem("refresh") || "";

        // @ts-ignore
        dispatch(handleGetUser(accessToken, refreshToken));
    };

    useEffect(() => {
        handleGetUserSession()
    }, [])

    return (
        <Routes>
            {isAuth
                ?
                PRIVATE_ROUTES.map(
                    ({path, Element, title}) =>
                        <Route key={path} path={path} element={<Element title={title} />} />
                )
                :
                PUBLIC_ROUTES.map(
                    ({path, Element, title}) =>
                        <Route key={path} path={path} element={<Element title={title} />} />
                )
            }
            <Route path={"*"} element={<Navigate to={"/main"} replace />} />
        </Routes>
    );
};

export default AppRouter;