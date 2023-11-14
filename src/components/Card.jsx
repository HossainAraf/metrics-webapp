import { Link } from 'react-router-dom';

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
