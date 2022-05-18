import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { Toaster } from 'react-hot-toast';
import RequiredAuth from './pages/Shared/RequiredAuth/RequireAuth';

function App() {
  return (
    <div className="">

      <Toaster />

      <Routes>

        <Route path="/" element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
