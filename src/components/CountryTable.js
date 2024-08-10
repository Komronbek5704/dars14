import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'flowbite-react';

function CountryTable({ onSelect }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState(JSON.parse(localStorage.getItem('selectedCountries')) || []);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSelect = (country) => {
    const isSelected = selectedCountries.some(c => c.name === country.name);
    const newSelectedCountries = isSelected
      ? selectedCountries.filter(c => c.name !== country.name)
      : [...selectedCountries, country];

    setSelectedCountries(newSelectedCountries);
    localStorage.setItem('selectedCountries', JSON.stringify(newSelectedCountries));
  };

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Nomi</Table.HeadCell>
        <Table.HeadCell>Axolisi</Table.HeadCell>
        <Table.HeadCell>Poytaxti</Table.HeadCell>
        <Table.HeadCell>Bayrog'i</Table.HeadCell>
        <Table.HeadCell>Tanlash</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {countries.map((country, index) => (
          <Table.Row key={index}>
            <Table.Cell>{country.name.common}</Table.Cell>
            <Table.Cell>{country.population}</Table.Cell>
            <Table.Cell>{country.capital?.[0]}</Table.Cell>
            <Table.Cell>
              <img src={country.flags.png} alt={country.name.common} width="50" />
            </Table.Cell>
            <Table.Cell>
              <Button
                onClick={() => handleSelect(country)}
                style={{ backgroundColor: selectedCountries.some(c => c.name === country.name) ? '#6ee7b7' : '' }}
              >
                Tanlash
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default CountryTable;
