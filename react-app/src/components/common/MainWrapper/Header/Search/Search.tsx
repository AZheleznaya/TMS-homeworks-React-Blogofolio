import React, {FC, ChangeEventHandler, useState, FormEventHandler} from 'react';

import SearchInput from "./SearchInput/SearchInput";
import SearchButton from "./SearchButton/SearchButton";

import styles from "./Search.module.css";

interface SearchProps {
    query: string
    onChange: ChangeEventHandler<HTMLInputElement>
    onSubmit: FormEventHandler<HTMLFormElement>
}

const Search: FC<SearchProps> = ({query = "", onChange, onSubmit}) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleCloseSearchInput = () => setOpen(false);
    const handleOpenSearchInput = () => setOpen(true);

    return (
        <div className={styles.searchWrapper}>
            {open && <SearchInput query={query} onClose={handleCloseSearchInput} onChange={onChange} onSubmit={onSubmit} />}
            <SearchButton onClick={handleOpenSearchInput} />
        </div>
    );
};

export default Search;