import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeList from './PokeList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PokeList />
    </div>
  );
}

export default App;
