import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import CountryTable from '../components/CountryTable';
import Pagination from '../components/Pagination';
import "./Home.css"

function Home() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCarouselItems(data.map(country => ({
          name: country.name.common,
          flag: country.flags.png,
          population: country.population,
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    console.log(`Current page: ${page}`);
  };

  return (
    <div className="home-container">
      <header className="header">
        <a href="/" className="logo">Logo</a>
        <button className="selected-button">Tanlanganlar</button>
      </header>
      <div className="hero-section">
        <h1 className="hero-title">Davlatlar ro'yxati</h1>
        <Carousel items={carouselItems} />
      </div>
      <CountryTable />
      <Pagination totalPages={20} onPageChange={handlePageChange} />
    </div>
  );
}

export default Home;
