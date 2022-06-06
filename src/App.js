import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './pages/home_page';
import Login from './pages/login_page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
