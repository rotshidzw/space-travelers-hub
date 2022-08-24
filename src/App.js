import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RocketsPage from './pages/rocketsPage/RocketsPage';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/profile';
import Error from './components/Error/Error';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
