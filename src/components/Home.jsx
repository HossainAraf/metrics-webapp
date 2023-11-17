// IMPORTS
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import asiaImage from '../assets/asia.png';
import CountryFilter from './CountryFilter';
import Card from './Card';
import '../styles/home.css';

// FUNCTION TO CHUNK ARRAY INTO ROWS
function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = CountryFilter(searchTerm);

  return (
    <Container>
      <Row>
        <Col>
          <img src={asiaImage} alt="asia" style={{ maxWidth: '100%' }} />
        </Col>
        <Col id="written-content">
          <h2>ASIA</h2>
          <h5>Population: 4,764,955,914</h5>
        </Col>
      </Row>
      <Row className="center">STATS BY COUNTRY</Row>

      {chunkArray(filteredCountries, 2).map((rowCountries, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;

        return (
          <Row key={rowCountries[0].alpha2code}>
            {rowCountries.map((country, colIndex) => {
              const isFirstCol = colIndex === 0;
              let backgroundColor;

              if (isFirstCol) {
                backgroundColor = isEvenRow ? '#dc4681' : '#d04379';
              } else {
                backgroundColor = isEvenRow ? '#d04379' : '#dc4681';
              }

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
        );
      })}
    </Container>
  );
};

export default Home;
