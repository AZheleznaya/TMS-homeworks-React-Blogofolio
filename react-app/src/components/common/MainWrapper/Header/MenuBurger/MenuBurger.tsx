import React, {FC, useState} from 'react';

import MenuHeader from "./MenuHeader/MenuHeader";

import BurgerMenu from "../../../../../assets/image/Icon-Menu.svg";
import BurgerCross from "../../../../../assets/image/Icon-Cancel.svg";

import styles from "./MenuBurger.module.css";

type MenuBurgerVariant = "burger" | "cross"

interface MenuBurgerProps {
    variant?: MenuBurgerVariant
    userName?: string
}

const MenuBurger: FC<MenuBurgerProps> = (
    {
        variant= false,
        userName= ""
    }) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleToggleBurgerMenu = () => setOpen(prevState => !prevState);

    return (
        <div className={styles.menuBurgerWrapper} onClick={handleToggleBurgerMenu}>
            <>
                <div className={styles.menuBurger}>
                    {!open || variant === "burger"
                        ?
                        <img src={BurgerMenu} alt="burger" />
                        :
                        <img src={BurgerCross} alt="cross" />
                    }
                </div>
            </>
            {open && <MenuHeader userName={userName} />}
        </div>
    );
};

export default MenuBurger;