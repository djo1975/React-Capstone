import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './components/countries';
import Details from './components/details';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:countryId" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
