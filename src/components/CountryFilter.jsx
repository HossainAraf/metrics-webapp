// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countrySlice';

// COMPONENTS
const CountryFilter = (searchTerm) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countries.filter((country) => country.region === 'Asia'
  && country.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return filteredCountries;
};

export default CountryFilter;
