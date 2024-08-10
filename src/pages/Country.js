import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LineChart from '../components/LineChart';
import "./Country.css"

function Country() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${id}`)
      .then(response => setCountry(response.data[0]))
      .catch(error => console.error('Error fetching country data:', error));
  }, [id]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="country-container">
      <div className="country-details">
        <h1 className="country-name">{country.name.common}</h1>
        <img src={country.flags.png} alt={`${country.name.common} flag`} className="country-flag" />
        <p><strong>Pul birligi:</strong> {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}</p>
        <p><strong>Ahollisi:</strong> {country.population.toLocaleString()}</p>
      </div>
      <div className="chart-container">
        <LineChart />
      </div>
    </div>
  );
}

export default Country;
