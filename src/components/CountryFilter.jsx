// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countrySlice';

// COMPONENTS
const CountryFilter = () => {
  const dispatch = useDispatch();