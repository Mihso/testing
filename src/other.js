import logo from './logo.svg';
import './App.css';
import Item from './item/item';
import { useState } from 'react';

function Other() {

    const [location, updatelocation]= useState([5,5]);

    const grid = [];

    for(let i = 0; i < 10; i++){
      grid.push([0,0,0,0,0,0,0,0,0,0]);
    }

    grid[location[0]][location[1]] = 1;
  
  function createRow(row){
    
    return(
      row.map((value, idx) => (

        <div key={idx}>
          {value}
        </div>

      )
    )
  );
  }

  return (
    <div className="App">
    <header className="App-header">
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