import styles from '../../styles/Home.module.css';

import React from 'react';

import BG from '../../images/computer.png';

const Poster = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>BIG SALE 20%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>the bestseller of 2022</div>
                    <div className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</div>
                    <button className={styles.button}>Shop now</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt='poster' />
                </div>
            </div>
        </section>
    );
};

export default Poster;
