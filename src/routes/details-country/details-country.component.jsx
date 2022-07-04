import './details-country.styles.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MainDataContext } from '../../context/Main-data.context';

const CountryDetails = () => {
    const { countryName } = useParams();
    const { data } = useContext(MainDataContext);
    console.log(data);

    const {
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
        flags,
    } = data.find((country) => country.name.common === countryName);

    const currency = Object.keys(currencies);
    const language = Object.keys(languages); //   to access nested objects dynamically
    const nativeName = Object.keys(name.nativeName);

    console.log(borders);

    let navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/');
    };

    return (
        <section className='country-details-container'>
            <button onClick={navigateHandler}>BACK</button>

            <figure className='country-details-figure'>
                <div className='details-img-container'>
                    <img src={flags.png} alt={countryName} />
                </div>
                <div className='details-info-container'>
                    <h2>{countryName}</h2>
                    <ul>
                        <li>
                            <span>Native Name: </span>
                            {name.nativeName[nativeName[0]].common}
                        </li>
                        <li>
                            <span>Population: </span>
                            {population}
                        </li>
                        <li>
                            <span>Region: </span>
                            {region}
                        </li>
                        <li>
                            <span>Sub Region: </span>
                            {subregion}
                        </li>
                        <li>
                            <span>Capital: </span>
                            {capital}
                        </li>
                        <li>
                            <span>Top Level Domain: </span>
                            {tld}
                        </li>
                        <li>
                            <span>Currencies: </span>
                            {currencies[currency[0]].name}
                        </li>
                        <li>
                            <span>Languages: </span>
                            {languages[language]}
                        </li>
                    </ul>
                    <footer>
                        <span>
                            <strong>Border Countries: </strong>
                        </span>
                        <div>
                            {borders ? (
                                borders.map((countryCode) => {
                                    const borderCountry = data.find(
                                        (countryObj) =>
                                            countryObj.cca3 === countryCode
                                    );
                                    return (
                                        <span>{borderCountry.name.common}</span>
                                    );
                                })
                            ) : (
                                <span>None</span>
                            )}
                        </div>
                    </footer>
                </div>
            </figure>
        </section>
    );
};

export default CountryDetails;
