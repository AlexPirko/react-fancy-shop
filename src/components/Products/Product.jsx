import styles from '../../styles/Product.module.css';

import React, { useEffect, useState } from 'react';
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const Product = ({ title, price, description, images }) => {
    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();

    useEffect(() => {
        if (!images.length) return;

        setCurrentImage(images[0]);
    }, [images]);

    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current} style={{ backgroundImage: `url(${currentImage})` }} />

                <div className={styles['images-list']}>
                    {images.map((image, ind) => (
                        <div
                            key={ind}
                            className={styles.image}
                            style={{ backgroundImage: `url(${image})` }}
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>$ {price}</div>
                <div className={styles.color}>
                    <span>Color:</span>Green
                </div>
                <div className={styles.sizes}>
                    <span>Sizes:</span>
                    <div className={styles.list}>
                        {SIZES.map((size) => (
                            <div
                                onClick={() => setCurrentSize(size)}
                                className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                                key={size}>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>{description}</p>
                <div className={styles.actions}>
                    <button className={styles.add} disabled={!currentSize}>
                        Add to Cart
                    </button>
                    <button className={styles.favourite}>Add to Favourites</button>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.purchases}>{Math.floor(Math.random() * 20 + 1)} purchased</div>

                    <Link to={ROUTES.HOME}>Return to HomePage</Link>
                </div>
            </div>
        </section>
    );
};

export default Product;
