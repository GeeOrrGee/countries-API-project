import './main-page.styles.scss';
import { useState, useContext, useEffect } from 'react';

import { MainDataContext } from '../../context/Main-data.context';
import CountryPreview from '../../components/country-preview/country-preview.component';
const MainPage = () => {
    const { data } = useContext(MainDataContext);

    const [currentData, setCurrentData] = useState(data);
    useEffect(() => {
        setCurrentData(data);
    }, [data]);
    return (
        <main>
            <div className='search-inputs-container'>
                <input />
                <input />
            </div>
            <section className='countries-preview-container'>
                {currentData.map((country) => (
                    <CountryPreview country={country} />
                ))}
            </section>
        </main>
    );
};

export default MainPage;
