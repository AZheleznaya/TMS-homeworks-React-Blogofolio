import React, {FC} from 'react';

import styles from "./Footer.module.css";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>©2022 Blogfolio</div>
            <div className={styles.footerContent}>All rights reserved</div>
        </footer>
    );
};

export default Footer;