// IMPORTS
import React from 'react';
import asiaImage from '../assets/asia.png';
import CountryFilter from './CountryFilter';
import Card from './Card';

const Home = () => {
  const filteredCountries = CountryFilter();
  return (
    <div>
      <div className="">
        <div className="">
          <img src={asiaImage} alt="asia" />
        </div>
        <div className="">
          <h1 className=""> Asia </h1>
          <h3 className="">Population:  96,618,159</h3>
        </div>
      </div>

      <div className="">STATS BY COUNTRY</div>
      <div className="" id="container">
        <div className="">
          {filteredCountries.map((country, index) => (
            <Card
              key={country.alpha2code}
              to={`/${country.name}`}
              title={country.name}
              backgroundColor={index === 0 || index === 3 || index === 4 || index === 7 || index === 8 ? '#3f66ab' : '#4369b2'}
              population={country.population}
              imageSrc={country.flag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
