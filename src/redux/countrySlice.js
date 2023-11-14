// IMPORTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//INITIAL STATE
const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

// THUNKS
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  try {
    const response = await fetch('https://restcountries.com/v2/region/asia');
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
});
