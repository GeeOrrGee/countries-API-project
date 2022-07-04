import './App.scss';
import { useContext } from 'react';
import { MainDataContext } from './context/Main-data.context';
import { Routes, Route } from 'react-router-dom';
import Dummy from './dummy';
import MainPage from './routes/main-page/main-page.component';
import CountryDetails from './routes/details-country/details-country.component';

const App = () => {
    return (
        <>
            <header>
                <h2>Where in the world?</h2>
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
