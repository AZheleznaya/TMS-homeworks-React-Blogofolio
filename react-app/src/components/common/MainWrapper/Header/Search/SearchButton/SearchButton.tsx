import React, {FC} from 'react';

import iconSearch from "../../../../../../assets/image/Search-Icon.svg";

import styles from "./SearchButton.module.css";

interface SearchButtonProps {
    onClick: () => void
}

const SearchButton: FC<SearchButtonProps> = ({onClick = () => {}}) => {
    return (
        <div onClick={onClick} className={styles.searchButton}>
            <img src={iconSearch} alt="iconSearch" />
        </div>
    );
};

export default SearchButton;