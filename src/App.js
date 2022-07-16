import './App.scss';
import HomeComp from './Components/Home_Component';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HotelListing from './Components/HotelListing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/Seera_challenge' element={<HomeComp />} />
          <Route path='/HotelListing' element={<HotelListing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
