import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Item from "./page/Item";
import Main from "./page/Main";


function App(props) {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/item/:item" element={<Item/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
