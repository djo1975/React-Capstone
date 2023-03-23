import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './components/countries';
import Details from './components/details';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<div className="country-list"><Countries /></div>} />
          <Route path="/country/:countryId" element={<Details />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
