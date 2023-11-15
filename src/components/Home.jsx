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
          {rowCountries.map((country, colIndex) => {
            const isEvenRow = rowIndex % 2 === 0;
            const isFirstCol = colIndex === 0;
            const backgroundColor = isFirstCol
              ? isEvenRow
                ? '#dc4681'
                : '#000'
              : isEvenRow
                ? '#000'
                : '#dc4681';

            return (
              <Col className="card-container" key={country.alpha2code} xs={6} md={6} lg={6}>
                <Card
                  to={`/${country.name}`}
                  title={country.name}
                  backgroundColor={backgroundColor}
                  population={country.population}
                  imageSrc={country.flag}
                />
              </Col>
            );
          })}
        </Row>
      ))}
    </Container>
  );
};

export default Home;
