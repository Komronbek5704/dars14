import { Drawer as FlowbiteDrawer } from 'flowbite-react';
import { useState } from 'react';

function Drawer({ open, onClose }) {
  const [selectedCountries, setSelectedCountries] = useState(JSON.parse(localStorage.getItem('selectedCountries')) || []);

  return (
    <FlowbiteDrawer open={open} onClose={onClose}>
      <h2 className="text-xl font-bold">Tanlanganlar</h2>
      <ul>
        {selectedCountries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </FlowbiteDrawer>
  );
}

export default Drawer;
