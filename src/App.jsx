// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import IMCPage from './pages/IMCPage';
import RutinasPage from './pages/RutinasPage';
import PlanAlimenticioPage from '../src/pages/PlanAlimenticio';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<IMCPage />} />
        <Route path="/rutinas" element={<RutinasPage />} />
        <Route path="/plan-alimenticio" element={<PlanAlimenticioPage />} />
        <Route path="/map" element={< MapPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

