import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import Drawer from './Drawer';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <header className="max-w-[900px] mx-auto flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/">Logo</Link>
        <Button onClick={toggleDrawer}>Tanlanganlar</Button>
      </header>
      <Drawer open={drawerOpen} onClose={toggleDrawer} />
    </>
  );
}

export default Header;
