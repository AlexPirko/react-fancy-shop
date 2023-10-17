import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCategories } from '../features/categories/categoriesSlice';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import AppRoutes from './AppRoutes/AppRoutes';
import Footer from './Footer/Footer';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className='app'>
            <Header />

            <div className='container'>
                <SideBar />
                <AppRoutes />
            </div>
            <Footer />
        </div>
    );
};

export default App;
