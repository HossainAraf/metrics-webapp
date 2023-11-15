// IMPORTS
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import asiaImage from '../assets/asia.png';
import CountryFilter from './CountryFilter';
import Card from './Card';
import '../styles/home.css';

// Function to chunk the array into subarrays
function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const Home = () => {
  const filteredCountries = CountryFilter();

  return (
    <Container>
      <Row>
        <Col>
          <img src={asiaImage} alt="asia" style={{ maxWidth: '100%' }} />
        </Col>
        <Col>
          <h1>Asia</h1>
          <h3>Population: 4,764,955,914</h3>
        </Col>
      </Row>

      <div className="">STATS BY COUNTRY</div>

      {chunkArray(filteredCountries, 2).map((rowCountries, rowIndex) => (
        <Row key={rowCountries[0].alpha2code}>
          {rowCountries.map((country, colIndex) => (
            <Col className="card-container" key={country.alpha2code} xs={6} md={6} lg={6}>
              <Card
                to={`/${country.name}`}
                title={country.name}
                backgroundColor={
                  (rowIndex === 0 && colIndex === 0)
                  || (rowIndex === 1 && colIndex === 1)
                  || (rowIndex === 2 && colIndex === 0)
                  || (rowIndex === 3 && colIndex === 1)
                  || (rowIndex === 4 && colIndex === 0) // first country in the fifth row
                    ? '#dc4681'
                    : '#d1447a'
                }
                population={country.population}
                imageSrc={country.flag}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Home;
