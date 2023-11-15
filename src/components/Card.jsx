import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/card.css';

const Card = ({
  to, imageSrc, title, subtitle, backgroundColor, population,
}) => (
  <Link to={to} className="">
    <div className="" style={{ backgroundColor }}>
      <Container fluid>
        <Row className="">
          <Col xs={6} md={6} lg={6}>
            <img src={imageSrc} alt={title} className="" />
          </Col>
          <Col xs={6} md={6} lg={6}>
            <div className="">
              <span className="">{title}</span>
              <span className="">{subtitle}</span>
              <span className="">
                Population:
                {' '}
                {population}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Link>
);

// PROPTYPES VALIDATION
Card.propTypes = {
  to: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default Card;
