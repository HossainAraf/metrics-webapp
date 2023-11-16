import { configureStore } from '@reduxjs/toolkit';
import store from '../redux/store';

describe('Redux Store', () => {
  it('should configure the store with the correct reducer', () => {
    const testStore = configureStore({
      reducer: {
        countries: () => ({ dummyData: 'test' }),
      },
    });

    const currentState = testStore.getState();
    expect(currentState).toEqual({
      countries: { dummyData: 'test' },
    });
  });

  it('should have the correct initial state', () => {
    const initialState = store.getState();

    const expectedInitialState = {
      countries: {
        countries: [],
        status: 'loading',
        error: null,
      },
    };

    expect(initialState.countries.countries).toEqual(expectedInitialState.countries.countries);
  });
});
