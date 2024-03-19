
import './item.css';
import { useState } from 'react';
const Item = props => {

    const [name, type] = props.children;

    const [counter, updateCounter] = useState(0);

    console.log(props);
  return (
    <div className="item">
        <div>{name}</div>
        <div>{type}</div>
        <div>{counter}</div>
        <button onClick={()=>{updateCounter(counter + 1)}} >increment</button>
        <button onClick={()=>{updateCounter(counter - 1)}} >decrement</button>
    </div>
  );
}

export default Item;