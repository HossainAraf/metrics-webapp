import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ label, value }) => (
  <li className="">
    <div className="">{label}</div>
    <div className="">{value}</div>
  </li>
);

const Details = () => {
  const params = useParams();
  const { details } = params;
  const countries = useSelector((state) => state.countries.countries);

  const selectedCountry = countries.find((country) => country.name === details);

  return (
    <div>
      <div className="">
        <div className="">
          <div>
            <img src={selectedCountry?.flag} alt={details} className="" />
          </div>
        </div>
        <div className="">
          <h1 className="">{details?.toUpperCase()}</h1>
          <h3 className="">{`Population: ${selectedCountry?.population}`}</h3>
        </div>
      </div>
      <div className="">STATS BY COUNTRY</div>
      <div>
        <ul>
          <Card label="CAPITAL" value={selectedCountry?.capital} />
          <Card label="POPULATION" value={selectedCountry?.population} />
          <Card label="AREA" value={selectedCountry?.area} />
          <Card label="CURRENCY" value={selectedCountry?.currencies[0]?.code} />
          <Card label="CALLING CODE" value={selectedCountry?.callingCodes} />
          <Card label="TIMEZONES" value={selectedCountry?.timezones} />
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Details;
