import './App.css';
import Home from './Home';
import Other from './other';
import About from './About';
import Weather from './weather/weather';
import Projects from './Projects';
import {Routes ,Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {

  return (
    <div>
    <Navbar />
    <div style={{'borderStyle':'inset', 'borderColor':'black', 'borderWidth': '15px'}}>
      <div style={{'borderStyle':'solid', 'borderColor':'#58350071','backgroundColor':'#623b0071', 'borderWidth': '10px'}}>
      <div style={{'borderStyle':'inset', 'borderColor':'black', 'borderWidth': '10px'}}>
      <div style={{'borderStyle':'solid', 'borderColor':'#623b0071','backgroundColor': '#623b0071' , 'borderWidth': '10px'}}>
      <div style={{'borderStyle':'inset', 'borderColor':'black', 'borderWidth': '10px'}}>
    <Routes>
      <Route path='/testing' Component={Home} />
      <Route path='/other' Component={Other} />
      <Route path='/about' Component={About}/>
      <Route path='/projects' Component={Projects} />
      <Route path='/weather' Component={Weather} />
    </Routes>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
