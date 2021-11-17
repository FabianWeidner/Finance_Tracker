import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages & components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={(!user && <Navigate to="/login" />) || (user && <Home />)}
          />

          <Route
            path="/login"
            element={(user && <Navigate to="/" />) || (!user && <Login />)}
          />

          <Route
            path="/signup"
            element={(user && <Navigate to="/" />) || (!user && <Signup />)}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
