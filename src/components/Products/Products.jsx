import styles from '../../styles/Products.module.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Products = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className={styles.products}>
            {title && <h2>{title}</h2>}

            <div className={styles.list}>
                {list.map(({ id, images, title, category: { name: cat }, price }) => (
                    <Link to={`/products/${id}`} key={id} className={styles.product}>
                        <div className={styles.image} style={{ backgroundImage: `url(${images[0]})` }} />
                        <div className={styles.wrapper}>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.cat}>{cat}</div>
                            <div className={styles.info}></div>
                            <div className={styles.prices}>
                                <div className={styles.price}>$ {price}</div>
                                <div className={styles.oldPrice}>{price > 250 ? Math.floor(price * 0.8) : null}</div>
                            </div>

                            <div className={styles.purchases}>{Math.floor(Math.random() * 20 + 1)} purchased</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Products;
