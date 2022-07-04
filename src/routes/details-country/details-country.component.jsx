import './details-country.styles.scss';

import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MainDataContext } from '../../context/Main-data.context';

const CountryDetails = () => {
    const { countryName } = useParams();
    const { data } = useContext(MainDataContext);

    const targetedCountry = data.find(
        (country) => country.name.common === countryName
    );

    return (
        <section>
            <button></button>

            <figure>
                <div className='details-img-container'></div>
                <div className='details-info-container'></div>
            </figure>
        </section>
    );
};

export default CountryDetails;
