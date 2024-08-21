import './App.css';
import Home from './Home';
import Other from './other';
import About from './About';
import Weather from './weather/weather';
import Projects from './Projects';
import Contact from './contact/contact';
import {Routes ,Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {

  return (
    <div>
    <Navbar />
    <div className="borderer" style={{'borderStyle':'inset', 'borderColor':'black'}}>
      <div className="borderer" style={{'borderStyle':'solid', 'borderColor':'#58350071','backgroundColor':'#623b0071'}}>
      <div className="borderer" style={{'borderStyle':'inset', 'borderColor':'black'}}>
      <div className="borderer" style={{'borderStyle':'solid', 'borderColor':'#623b0071','backgroundColor': '#623b0071'}}>
      <div className="borderer" style={{'borderStyle':'inset', 'borderColor':'black'}}>
    <Routes>
      <Route path='/testing'>
        <Route path='' Component={Home} />
        <Route path='/testing/other' Component={Other} />
        <Route path='/testing/about' Component={About}/>
        <Route path='/testing/projects' Component={Projects} />
        <Route path='/testing/weather' Component={Weather} />
        <Route path='/testing/contact' Component={Contact} />
      </Route>
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
