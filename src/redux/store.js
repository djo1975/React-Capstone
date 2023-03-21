import countrySlice from './countries/countrySlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    countries: countrySlice,
  },
});

export default store;
