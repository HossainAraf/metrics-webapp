// IMPORTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//INITIAL STATE
const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};
