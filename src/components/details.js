import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { fetchCountries } from '../redux/countries/countrySlice';

const Details = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);

  const country = countries.find((c) => c.name === countryId);

  return (
    <>
      <NavLink to="/">
        <FiArrowLeft />
      </NavLink>
      {country && (
        <div className="details-container">
          <div className="details-header">
            <img src={country.flagSvg} alt={country.flagAlt} />
            <h1>{country.name}</h1>
          </div>
          <ul className="details-list">
            <li>
              <span>Capital:</span>
              {' '}
              <span>{country.capital}</span>
            </li>
            <li>
              <span>Population:</span>
              {' '}
              <span>{country.population.toLocaleString()}</span>
            </li>
            <li>
              <span>Area:</span>
              {' '}
              <span>
                {country.area}
                {' '}
                km²
              </span>
            </li>
            <li>
              <span>Timezones:</span>
              {' '}
              <span>
                {country.timezones.map((timezone) => (
                  <span key={timezone}>{timezone}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Details;
