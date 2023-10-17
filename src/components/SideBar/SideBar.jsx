import styles from '../../styles/Sidebar.module.css';
import cl from 'classnames';

import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to={`/categories/${1}`}>Link</NavLink>
                    </li>
                </ul>
            </nav>

            <div className={styles.footer}>
                <a href='/help' target='_blank' className={styles.link}>
                    Help
                </a>
                <a href='/terms' target='_blank' className={cl(styles.link, styles.link_terms)}>
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
};

export default SideBar;
