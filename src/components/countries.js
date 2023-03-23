import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';
import { fetchCountries } from '../redux/countries/countrySlice';
import Country from './country';
import worldwide from '../images/pngfind.com-continents-png-2212530 (1).png';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [continent, setContinent] = useState('all');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);

  return (
    <div>
      {' '}
      <div className="dropdown">
        <img src={worldwide} alt="Globe" />
        <h1 className="title">World</h1>

        <select
          name="continents"
          id="continents"
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="all">All coutries</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div className="dragisa">
        {countries.filter((country) => {
          if (continent === 'all') {
            return country;
          }
          return country.continent === continent;
        }).map((country) => (
          <div className="jebaga" key={country.name}>
            <FiArrowRightCircle />
            <Country
              name={country.name}
              continent={country.continent}
              flagEmoji={country.flagEmoji}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
