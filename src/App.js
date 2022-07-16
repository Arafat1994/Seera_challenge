import './App.scss';
import HomeComp from './Components/Home_Component';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HotelListing from './Components/HotelListing';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='' element={<HomeComp/>} /> 
        <Route path='/HotelListing' element={<HotelListing/>} /> 
      </Routes>

    </div>
  );
}
export default App;
