import React, {FC, ChangeEventHandler, FormEventHandler} from 'react';

import iconClose from "../../../../../../assets/image/Icon-Cancel.svg";

import styles from "./SearchInput.module.css";

interface SearchInputProps {
    query: string
    onClose: () => void
    onChange: ChangeEventHandler<HTMLInputElement>
    onSubmit: FormEventHandler<HTMLFormElement>
}

const SearchInput: FC<SearchInputProps> = ({query = "", onChange, onClose, onSubmit}) => {
    return (
        <form className={styles.searchInputWrapper} onSubmit={onSubmit}>
            <input
                id="search"
                value={query}
                onChange={onChange}
                name="searchInput"
                placeholder="Search..."
                className={styles.searchInput}
            />
            <img className={styles.searchIconClose} onClick={onClose} src={iconClose} alt="iconClose" />
        </form>
    );
};

export default SearchInput;