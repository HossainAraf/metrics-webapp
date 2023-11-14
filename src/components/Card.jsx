import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({
  to, imageSrc, title, subtitle, backgroundColor, population,
}) => (
  <div className="" style={{ backgroundColor }}>
    <Link to={to} className="">
      <div className="">
        <img src={imageSrc} alt={title} className="" />
        <div className="">
          <span className="">{title}</span>
          <span className="">{subtitle}</span>
          <span className="">
            Population:
            {' '}
            {population}
          </span>
        </div>
      </div>
    </Link>
  </div>
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
