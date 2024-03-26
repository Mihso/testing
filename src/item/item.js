
import './item.css';
import Sidebar from '../sidebar/sidebar';
import { useState } from 'react';
const Item = props => {

    const [name, type] = props.children;

    const [counter, updateCounter] = useState(0);

    const [opener, updateOpener] = useState(false);

  function open(){
    if(opener){
      return(<Sidebar></Sidebar>);
    }
  }

  return (
    <div>
      <div className="item">
        <div>{name}</div>
        <div>{type}</div>
        <div>{counter}</div>
        <button onClick={()=>{updateCounter(counter + 1)}} >increment</button>
        <button onClick={()=>{updateCounter(counter - 1)}} >decrement</button>
        <button onClick={()=>{updateOpener(!opener)}}>open</button>
      </div>
      {open()}
    </div>
  );
}

export default Item;