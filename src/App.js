import { useState } from 'react';

//react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Otp from './Components/Otp';
import Register from './Components/Register';
import Rest from './Components/Rest';
import RestDetail from './Components/RestDetail';
import RestList from './Components/RestList';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/verifyotp" element={<Otp />} />
            <Route path="/reslist" element={<Rest />} />
            <Route path="/resdetail" element={<RestDetail/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
