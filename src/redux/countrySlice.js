// IMPORTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// INITIAL STATE
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

// SLICE
const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
