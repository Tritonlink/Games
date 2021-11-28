import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Games from './components/games/Games';
import Home from './components/Home/Home';
import Ludo from './components/games/Ludo/Ludo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="games/">
            <Route path="Ludo/" element={<Ludo/>}></Route>
            <Route index element={<Games/>}></Route>
          </Route>
          <Route index element={<Home/>}/>
        </Route>
        <Route path="*" element={<div className="error-404">
          <p>Not found error 404</p>
          <Link to="/">Go to /</Link>
        </div>}/>
      </Routes>
    </Router>
  )
}

export default App;
