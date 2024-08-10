import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
