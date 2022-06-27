import './App.css';
import { useContext } from 'react';
import { MainDataContext } from './context/Main-data.context';
import { Routes, Route } from 'react-router-dom';
import Dummy from './dummy';
import MainPage from './routes/main-page/main-page.component';
import CountryDetails from './routes/details-country/details-country.component';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}>
                <Route path=':ccn3' element={<CountryDetails />} />
            </Route>
        </Routes>
    );
};

export default App;
