import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ name, flagEmoji, continent }) => (
  <Link to={`/country/${name}`}>
    <li>
      <h2>
        {name}
        <br />
        {flagEmoji}
      </h2>
      <p>
        {continent}
      </p>
    </li>
  </Link>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flagEmoji: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
};

export default Country;
