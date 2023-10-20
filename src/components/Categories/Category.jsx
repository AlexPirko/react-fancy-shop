import styles from '../../styles/Category.module.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';

const Category = () => {
    const { id } = useParams();
    const { list } = useSelector(({ categories }) => categories);

    const defaultValues = {
        title: '',
        price_min: 0,
        price_max: 0,
    };

    const defaultParams = {
        categoryId: id,
        ...defaultValues,
    };

    const [categ, setCateg] = useState('');
    const [values, setValues] = useState(defaultValues);
    const [params, setParams] = useState(defaultParams);

    useEffect(() => {
        if (!id) return;

        setParams({ ...defaultParams, categoryId: id });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (!id || !list.length) return;

        const { name } = list.find((item) => item.id === +id);
        setCateg(name);
    }, [list, id]);

    const { data, isLoading, isSuccess } = useGetProductsQuery(params);

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setParams({ ...defaultParams, ...values });
    };

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{categ}</h2>

            <form className={styles.filters} onSubmit={handleSubmit}>
                <div className={styles.filter}>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        placeholder='Product name'
                        value={values.title}
                    />
                </div>
                <div className={styles.filter}>
                    <input
                        type='number'
                        name='price_min'
                        onChange={handleChange}
                        placeholder='0'
                        value={values.price_min}
                    />
                </div>
                <div className={styles.filter}>
                    <input
                        type='number'
                        name='price_max'
                        onChange={handleChange}
                        placeholder='0'
                        value={values.price_max}
                    />
                </div>

                <button type='submit' hidden></button>
            </form>

            {isLoading ? (
                <div className={styles.preloader}>Loading...</div>
            ) : !isSuccess || !data.length ? (
                <div className={styles.back}>
                    <span>No results</span>
                    <button>Reset</button>
                </div>
            ) : (
                <Products title='' products={data} style={{ padding: 0 }} amount={data.length} />
            )}
        </section>
    );
};

export default Category;
