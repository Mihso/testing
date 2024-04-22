import logo from './logo.svg';
import './App.css';
import Item from './item/item';
import { useState } from 'react';

function Other() {

    const [location, updatelocation]= useState([5,5]);
    const [pressed, updatePressed] = useState("");

    const grid = [];

    for(let i = 0; i < 10; i++){
      grid.push([" "," "," "," "," "," "," "," "," "," "]);
    }

    grid[location[0]][location[1]] = 'x';
  

  function onPress(press){
    updatePressed(press.key);
    let x = location[0];
    let y = location[1];
    if(press.key === "s"){
      if(y == 9){
        updatelocation([x, 0]);
      }
      else{
        updatelocation([x, y + 1]);
      }
    }
    else if(press.key === "a"){
      if(x == 0){
        updatelocation([9, y]);
      }
      else{
        updatelocation([x - 1, y]);
      }
    }
    else if(press.key === "d"){
      if(x == 9){
        updatelocation([0, y]);
      }
      else{
        updatelocation([x + 1, y]);
      }
    }
    else if(press.key === "w"){
      if(y == 0){
        updatelocation([x, 9]);
      }
      else{
        updatelocation([x, y - 1]);
      }
    }

  }

  function createRow(row){
    
    return(
      row.map((value, idx) => (

        <div className='otherI' key={idx}>
          {value}
        </div>

      )
    )
  );
  }

  return (
    <div className="App">
    <header className="App-header">
    <input onKeyDown={e=>(onPress(e))}></input>
      <div className='other'>
        {
            grid.map((data, idx) => (
                <div key={idx}>
                  {createRow(data)}
                </div>
              )
            )
        }
        </div>
      </header>
    </div>
  );
}

export default Other;