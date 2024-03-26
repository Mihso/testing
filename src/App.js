import './App.css';
import Home from './Home';
import Other from './other';
import {Routes ,Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/other' Component={Other} />
    </Routes>
    </div>
  );
}

export default App;
