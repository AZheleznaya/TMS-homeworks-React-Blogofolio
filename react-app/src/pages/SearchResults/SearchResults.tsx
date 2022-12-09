import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import SearchResultsList from "../../components/common/SearchResultsList/SearchResultsList";
import Pagination from "../../components/common/Pagination/Pagination";

import {usePagination} from "../../context/PaginationContext";
import SearchService from "../../services/searchService";

const SearchResults: FC = () => {
    const { search } = useLocation();

    const {handleGetPaginationParams, pageResults} = usePagination();

    const query = search.split("?search=")[1];

    const handleSearch = async () => {
        await handleGetPaginationParams(SearchService.getSearchResults.bind(null, query));
    };

    useEffect(() => {
        handleSearch()
    }, [search])

    return (
        <PageWrapper title={!!query ? `Search results ‘${query}’` : ""}>
            <SearchResultsList matches={pageResults} query={query} />
            <Pagination items={pageResults} />
        </PageWrapper>
    );
};

export default SearchResults;