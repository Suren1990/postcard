import cn from 'classnames';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Nav.module.scss';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import useOutSideClick from '../../hooks/useOutsideClick';

const Nav = ({ showSearch }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const wrapperRef = useRef(null);

    const openCloseMenu = () => {
        setOpenMenu(!openMenu);
    }

    useOutSideClick(wrapperRef, openMenu, setOpenMenu);

    return (
        <>
            <nav className={styles.nav}>
                <div
                    className={styles.nav__main}
                    onClick={openCloseMenu}
                    ref={wrapperRef}
                >
                    <span className={`${styles.nav__mobile_menu}`}>
                        <i className={`${styles.nav__mobile_menu_icon} icon-menu-line`}></i>
                    </span>
                    <span className={styles.nav__all}>
                        <i className={`${styles.nav__menu_icon} icon-menu-line`}></i>
                        Բոլոր տեսակները
                        <i className={`${styles.nav__open_icon} icon-down`}></i>
                    </span>
                    <CategoriesMenu openMenu={openMenu} />
                </div>
                {
                    !showSearch && (
                        <div className={styles.nav__sub}>
                            <Link href="/">
                                <a className={cn(styles['nav__link'], { [styles['active']]: true })}>Մեր մասին</a>
                            </Link>
                            <Link href="/">
                                <a className={styles.nav__link}>Վճարման մեթոդներ</a>
                            </Link>
                            <Link href="/">
                                <a className={styles.nav__link}>Վճարման մեթոդներ</a>
                            </Link>
                        </div>
                    )
                }
            </nav>
            <div className={cn(styles.nav__search, { [styles.open]: showSearch })}>
                <input type="text" className={styles.nav__input} />
                <i className={`${styles.nav__search_icon} icon-search`}></i>
            </div>
        </>
    );
};

export default Nav;