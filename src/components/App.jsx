import AppRoutes from './AppRoutes/AppRoutes';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';

const App = () => {
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
