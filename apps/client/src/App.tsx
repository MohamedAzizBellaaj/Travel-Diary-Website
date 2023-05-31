import './App.css';
import Feed from './pages/Feed';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PostDetails from './pages/PostDetails';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/feed'
          element={<Feed />}
        />
        <Route
          path='/details/:id'
          element={<PostDetails />}
        />
        <Route
          path='/profile/:id'
          element={<Profile />}
        />
      </Routes>
    </>
  );
}

export default App;
