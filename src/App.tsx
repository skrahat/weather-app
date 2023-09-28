import { GoogleMapsComponent } from './components/GoogleMap/GoogleMap';
import CityTable from './components/Table/CityTable';
import './App.css';
import { canadianCities } from './constant/data';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Weather Dashboard</h1>
      </header>
      <div className="content">
        <GoogleMapsComponent />
        <CityTable cities={canadianCities} />
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Weather App
      </footer>
    </div>
  );
}

export default App;
