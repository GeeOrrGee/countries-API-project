import './App.scss';
import { useContext } from 'react';
import { MainDataContext } from './context/Main-data.context';
import { Routes, Link, Route } from 'react-router-dom';
import Dummy from './dummy';
import MainPage from './routes/main-page/main-page.component';
import CountryDetails from './routes/details-country/details-country.component';

const scrollHandler = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const App = () => {
    return (
        <>
            <header>
                <h2 onClick={scrollHandler}>Where in the world?</h2>
                <button>Dark Mode</button>
            </header>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/:countryName' element={<CountryDetails />} />
            </Routes>
        </>
    );
};

export default App;
