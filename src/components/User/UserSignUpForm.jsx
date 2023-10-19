import styles from '../../styles/User.module.css';

import React, { useState } from 'react';

const UserSignUpForm = () => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        avatar: '',
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.close}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>
            <div className={styles.title}></div>

            <form className={styles.form}>
                <div className={styles.group}>
                    <input
                        type='email'
                        placeholder='Your email'
                        name='email'
                        value={values.email}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='name'
                        placeholder='Your name'
                        name='name'
                        value={values.name}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Your password'
                        name='password'
                        value={values.password}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='avatar'
                        placeholder='Your avatar'
                        name='avatar'
                        value={values.avatar}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.link}>I already have an account</div>

                <button type='submit' className={styles.submit}></button>
            </form>
        </div>
    );
};

export default UserSignUpForm;