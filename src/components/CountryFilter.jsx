// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countrySlice';

// COMPONENTS
const CountryFilter = () => {
  const dispatch = useDispatch();

  // SELECT STATE FROM REDUX STORE
  const countries = useSelector((state) => state.countries.countries);
  // USE USEEFEECT TO DISPATCH FETCHCOUNTRIES ACTION
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // FILTER COUNTRIES BY REGION
  const filteredCountries = countries.filter((country) => country.region === 'Asia');
  return filteredCountries;
};

export default CountryFilter;
