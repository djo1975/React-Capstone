import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data.map((country) => ({
    name: country.name.common,
    population: country.population,
    capital: country.capital,
    area: country.area,
    flagEmoji: country.flag,
    flagPng: country.flags.png,
    flagSvg: country.flags.svg,
    flagAlt: country.flags.alt,
    continent: country.continents[0],
    timezones: country.timezones,
  }));
});

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => action.payload);
  },
});

export default countrySlice.reducer;
