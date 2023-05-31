import './App.css';
import Feed from './pages/Feed';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PostDetails from './pages/PostDetails';

function App() {
  return (
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
    </Routes>
  );
}

export default App;
