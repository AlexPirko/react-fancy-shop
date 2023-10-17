import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';

const AppRoutes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
