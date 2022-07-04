import './main-page.styles.scss';
import { useState, useContext, useEffect } from 'react';

import { MainDataContext } from '../../context/Main-data.context';
import CountryPreview from '../../components/country-preview/country-preview.component';
const MainPage = () => {
    const { data } = useContext(MainDataContext);
    const [searchField, setSearchField] = useState('');
    const [currentData, setCurrentData] = useState(data);
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        const filteredCountries = data.filter((country) =>
            country.name.common.toLowerCase().includes(searchField)
        );
        setCurrentData(filteredCountries);

        ///////////////
        const filteredData = filteredCountries.filter((country) =>
            country.region.toLowerCase().includes(selectValue)
        );

        setCurrentData(filteredData); // sets the filtering functionalities whenever the state values change, using context data as a base value for filtering
    }, [searchField, data, selectValue]);

    const onSearchChangeHandler = (e) => {
        setSearchField(e.target.value.toLowerCase());
    };

    const onSelectChangeHandler = (e) => {
        setSelectValue(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // useEffect(() => {}, [data, selectValue]);
    return (
        <section>
            <form className='search-inputs-container' onSubmit={handleSubmit}>
                <input onChange={onSearchChangeHandler} />
                <select
                    defaultValue={selectValue}
                    onChange={onSelectChangeHandler}
                >
                    <option value={''}>Select Region</option>
                    <option value={'Asia'}>Asia</option>
                    <option value={'Europe'}>Europe</option>
                    <option value={'Africa'}>Africa</option>
                    <option value={'America'}>America</option>
                    <option value={'Oceania'}>Oceania</option>
                </select>
            </form>
            <div className='countries-preview-container'>
                {currentData.map((country) => (
                    <CountryPreview country={country} />
                ))}
            </div>
        </section>
    );
};

export default MainPage;
