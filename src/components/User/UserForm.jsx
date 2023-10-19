import styles from '../../styles/User.module.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSignUpForm from './UserSignUpForm';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';
import UserLoginForm from './UserLoginForm';

const UserForm = () => {
    const dispatch = useDispatch();
    const { showForm, formType } = useSelector(({ user }) => user);
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

    const closeForm = () => dispatch(toggleForm(false));

    return showForm ? (
        <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignUpForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};
export default UserForm;
