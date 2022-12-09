import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useTheme} from "../../../context/ThemeContext";
import {IPostCard} from "../PostList/PostCard/PostCard";
import {closeCardAction} from "../../../store/reducers/selectedCardReducer";

import Actions, {ActionsVariant} from "../Actions/Actions";

import CloseWindow from "../../../assets/image/Icon-CloseModalWindow.svg";
import CloseWindowWhite from "../../../assets/image/Icon-CloseModalWindow-White.svg";

import styles from "./ModalWindow.module.css";

const ModalWindow: FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isDarkTheme, isLightTheme} = useTheme();

    const {selectedCard: card, cards = []} = useSelector((state: any) => state.selectedCard);
    const selectedCard = cards?.find((item: IPostCard) => item.id === card.id);

    const handleModalClose = () => {
        dispatch(closeCardAction());
    };

    const modalClose = (e: any) => {
        if (e.target === e.currentTarget) {
            handleModalClose()
        }
    };

    const handlePostCardOpen = () => {
        navigate(`/main/${selectedCard.id}`);
        handleModalClose();
    };

    return (
        <div className={`${styles.modalWindowWrapper} ${isDarkTheme && styles.darkBackground}`} onClick={modalClose}>
            <div className={`${styles.modalWindow} ${isDarkTheme && styles.dark}`}>
                <img
                    className={styles.modalWindowClose}
                    onClick={handleModalClose}
                    src={isLightTheme ? CloseWindow : CloseWindowWhite}
                    alt="close"
                />
                <div className={styles.modalCardWrapper}>
                    <div className={styles.modalCardMainContent}>
                        <div className={styles.modalCardContent}>
                            <h4 className={styles.modalCardDate}>{selectedCard.date}</h4>
                            <h2 className={`${styles.modalCardTitle} ${isDarkTheme && styles.dark}`} onClick={handlePostCardOpen}>
                                {selectedCard.title}
                            </h2>
                            <p className={styles.modalCardDescription}>{selectedCard.title}</p>
                        </div>
                        <img className={styles.modalCardImage} src={selectedCard.image} alt="modalImage" />
                    </div>
                    <Actions variant={ActionsVariant.forMain} post={selectedCard} className={styles.modalCardActions} />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;