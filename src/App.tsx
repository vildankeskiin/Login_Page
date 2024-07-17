import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;