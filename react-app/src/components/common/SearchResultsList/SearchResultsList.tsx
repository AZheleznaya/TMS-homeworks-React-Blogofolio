import React, {FC} from 'react';

import {IPostCard} from "../PostList/PostCard/PostCard";
import {useTheme} from "../../../context/ThemeContext";

import SearchResultItem from "./SearchResultItem/SearchResultItem";

import styles from "./SearchResultsList.module.css";

interface SearchResultsListProps {
    matches: IPostCard[]
    query: string
}

const SearchResultsList: FC<SearchResultsListProps> = ({matches= [], query= ""}) => {

    const {isDarkTheme} = useTheme();

    return (
        <div className={styles.searchList}>
            {!!matches.length
                ?
                matches.map((post: IPostCard) => <SearchResultItem key={post.id} {...post} />)
                :
                <div className={`${styles.emptyMatches} ${isDarkTheme && styles.dark}`}>
                    {!query ? "Enter search word into Search Field" : `No results for ${query}`}
                </div>
            }
        </div>
    );
};

export default SearchResultsList;