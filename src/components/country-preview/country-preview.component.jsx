import './country-preview.styles.scss';

const CountryPreview = ({ country }) => {
    // console.log(country);

    const { flags, name, region, population, capital } = country;
    return (
        <figure className='country-preview'>
            <div className='country-img-container'>
                <img src={flags.png} alt={name.official} />
            </div>
            <div className='country-info-container'>
                <h2>{name.common}</h2>
                <div>
                    <p>
                        <strong>Population:</strong>
                        {population}
                    </p>
                    <p>
                        <strong>Region:</strong>
                        {region}
                    </p>
                    <p>
                        <strong>Capital:</strong>
                        {capital}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export default CountryPreview;
