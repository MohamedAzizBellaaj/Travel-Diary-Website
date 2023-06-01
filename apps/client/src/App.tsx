import './App.css';
import Feed from './pages/Feed';

import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PostDetails from './pages/PostDetails';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { SignUpIn } from './pages/SignUpIn';

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
        <Route
          path='/signin'
          element={<SignUpIn />}
        />
      </Routes>
    </>
  );
}

export default App;
