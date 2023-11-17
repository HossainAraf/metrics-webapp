import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/card.css';

const Card = ({
  to, imageSrc, title, subtitle, backgroundColor, population,
}) => (
  <Link to={to} className="">
    <div className="" style={{ backgroundColor }}>
      <Container fluid>
        <Col className="">
          <Row>
            <Col className="img-wrapper">
              <img src={imageSrc} alt={title} className="" />
              <BsArrowRightCircle className="card-arrow" />
            </Col>
          </Row>
          <Col className="name-population-wrapper">
            <span className="">{title}</span>
            <span className="">{subtitle}</span>
            <span className="">
              {' '}
              {population}
            </span>
          </Col>
        </Col>
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
