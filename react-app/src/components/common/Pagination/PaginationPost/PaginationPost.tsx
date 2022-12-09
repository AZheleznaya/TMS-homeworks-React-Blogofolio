import React, {FC, MouseEventHandler} from 'react';

import {useTheme} from "../../../../context/ThemeContext";

import ArrowPrev from "../../../../assets/image/Icon-Arrow-Prev.svg";
import ArrowPrevWhite from "../../../../assets/image/Icon-Arrow-Prev-White.svg";
import ArrowNext from "../../../../assets/image/Icon-Arrow-Next.svg";
import ArrowNextWhite from "../../../../assets/image/Icon-Arrow-Next-White.svg";

import styles from "./PaginationPost.module.css";

interface PaginationPostProps {
    nextTitle?: string | null
    previousTitle?: string | null
    onClickNext?: MouseEventHandler<HTMLButtonElement>
    onClickPrevious?: MouseEventHandler<HTMLButtonElement>
}

const PaginationPost: FC<PaginationPostProps> = (
    {
        nextTitle,
        previousTitle,
        onClickNext,
        onClickPrevious
    }) => {

    const {isDarkTheme} = useTheme();

    return (
        <div className={styles.paginationPost}>
            <button disabled={!previousTitle} onClick={onClickPrevious} className={styles.arrowPrev}>
                <img src={isDarkTheme ? ArrowPrevWhite : ArrowPrev} alt="arrowPrev" />
                <div className={styles.paginationPrevious}>
                    <p className={`${styles.paginationText} ${isDarkTheme && styles.dark}`}>Prev</p>
                    {!!previousTitle && <p className={styles.paginationTitle}>{previousTitle}</p>}
                </div>
            </button>
            <button disabled={!nextTitle} onClick={onClickNext} className={styles.arrowNext}>
                <div className={styles.paginationNext}>
                    <p className={`${styles.paginationText} ${isDarkTheme && styles.dark}`}>Next</p>
                    {!!nextTitle && <p className={styles.paginationTitle}>{nextTitle}</p>}
                </div>
                <img src={isDarkTheme ? ArrowNextWhite : ArrowNext} alt="arrowNext" />
            </button>
        </div>
    );
};

export default PaginationPost;