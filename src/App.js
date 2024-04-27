import './App.css';
import Home from './Home';
import Other from './other';
import About from './About';
import Projects from './Projects';
import {Routes ,Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/testing' Component={Home} />
      <Route path='/other' Component={Other} />
      <Route path='/about' Component={About}/>
      <Route path='/projects' Component={Projects} />
    </Routes>
    </div>
  );
}

export default App;
