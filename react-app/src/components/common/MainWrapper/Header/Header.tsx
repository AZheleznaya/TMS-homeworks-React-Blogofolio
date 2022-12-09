import React, {FC, useState, ChangeEvent, FormEvent} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import MenuBurger from "./MenuBurger/MenuBurger";
import Search from "./Search/Search";
import UserInfo from "./UserInfo/UserInfo";

import {Routes} from "../../../../constants/routes";

import styles from "./Header.module.css";

const USER_NAME = "Artem Malkin";

const Header: FC = () => {

    const navigate= useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        location.search = `?search=${event.target.value}`
    };

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        navigate(`${Routes.search}?search=${searchQuery}`);
    };

    return (
        <header className={styles.headerWrapper}>
            <MenuBurger userName={USER_NAME} />
            <Search query={searchQuery} onChange={handleSearchQueryChange} onSubmit={handleSearch} />
            <UserInfo userName={USER_NAME} />
        </header>
    );
};

export default Header;