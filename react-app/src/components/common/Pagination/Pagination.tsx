import React, {FC, useEffect, useState} from 'react';

import {IPostCard} from "../PostList/PostCard/PostCard";
import {useTheme} from "../../../context/ThemeContext";
import {usePagination} from "../../../context/PaginationContext";

import ArrowPrev from "../../../assets/image/Icon-Arrow-Prev.svg";
import ArrowPrevWhite from "../../../assets/image/Icon-Arrow-Prev-White.svg";
import ArrowNext from "../../../assets/image/Icon-Arrow-Next.svg";
import ArrowNextWhite from "../../../assets/image/Icon-Arrow-Next-White.svg";

import styles from "./Pagination.module.css";

interface PaginationProps {
    items?: IPostCard[]
}

const Pagination: FC<PaginationProps> = ({items= []}) => {

    const {isDarkTheme} = useTheme();

    const {paginationData: {
        previous,
        next
    },
        activePage,
        pageResults,
        pageNumbers,
        handleChangePage,
        handleSetActivePage
    } = usePagination();

    const [paginationItems, setPaginationItems] = useState<number[]>([]);

    const getPaginationItems = () => {
        const result = pageNumbers.slice(activePage >= 3 ? activePage - 3 : activePage - activePage, activePage < pageNumbers.length ? activePage + 2 : activePage);

        if (!result.includes(pageNumbers[pageNumbers.length - 1])) {
            result.push(pageNumbers.at(-1) || 1)
        }

        if (!result.includes(pageNumbers[0])) {
            result.unshift(pageNumbers[0])
        }

        return result
    }

    useEffect(() => {
        setPaginationItems(getPaginationItems())
    }, [pageNumbers, activePage])

    return (
        !!items?.length && !!pageResults.length
            ?
            <div className={styles.pagination}>
                <button data-route={"prev"} disabled={!previous} onClick={handleChangePage} className={styles.arrowPrev}>
                    <img src={isDarkTheme ? ArrowPrevWhite : ArrowPrev} alt="arrowPrev" />
                    <p className={`${isDarkTheme && styles.dark}`}>Prev</p>
                </button>
                <nav className={`${styles.paginationPages} ${isDarkTheme && styles.dark}`}>
                    {paginationItems.map((num, index) => {
                        if ((num + 1) !== paginationItems[index + 1] && num !== paginationItems.at(-1)) {
                            return (
                                <>
                                    <span
                                        key={num}
                                        data-id={num - 1}
                                        onClick={handleSetActivePage}
                                        className={activePage === num ? styles.active : ""}
                                    >
                                        {num}
                                    </span>
                                    <span key={`smt${num}`}>...</span>
                                </>
                            )
                        } else {
                            return (
                                <span
                                    key={num}
                                    data-id={num - 1}
                                    onClick={handleSetActivePage}
                                    className={activePage === num ? styles.active : ""}
                                >
                                    {num}
                                </span>
                            )
                        }}
                    )}
                </nav>
                <button data-route={"next"} disabled={!next} onClick={handleChangePage} className={styles.arrowNext}>
                    <p className={`${isDarkTheme && styles.dark}`}>Next</p>
                    <img src={isDarkTheme ? ArrowNextWhite : ArrowNext} alt="arrowNext" />
                </button>
            </div>
            :
            null
    );
};

export default Pagination;