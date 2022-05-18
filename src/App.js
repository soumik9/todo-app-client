import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">

      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
