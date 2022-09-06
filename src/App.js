import { Navbar } from "./Components/Navbar";
import { CountriesList } from "./Components/CountriesList";
import { useState } from 'react';


function App() {
  const [countriesData, setCountriesData] = useState([])
 
  return (
    <div className="App">
      <Navbar />
      <div className='list-group'>
        <CountriesList countriesData={countriesData} />
      </div>
    </div>
  );
}

export default App;
