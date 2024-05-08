import './App.css';
import { useState, useEffect } from 'react';
import NPC from './npc/npc';

function Other() {

    const [location, updatelocation]= useState([5,5]);
    const [pressed, updatePressed] = useState("-");
    let char1 = new NPC(9);
    let char2 = new NPC(9);
    const [marks, updateMarks] = useState([char1, char2]);

    const [text, updateText] = useState("");

    const grid = [];


    useEffect(() => {
      let interval = setInterval(() => {
        updateMarks([char1, char2]);

      }, 6000);
    },[]);

    for(let i = 0; i < 10; i++){
      grid.push([" "," "," "," "," "," "," "," "," "," "]);
    }
    // let d = 0;
    // while(d < 2){
    //   let x = Math.floor(Math.random(0)*10);
    //   let y = Math.floor(Math.random(0)*10);

    //   if(x !== location[0] || y !== location[1]){
    //     updateMarks([...marks, [x, y]]);
    //     d += 1;
    //   }
    // }

    for(const mark of marks){
      grid[mark.location[0]][mark.location[1]] = "E";
    }

    grid[location[0]][location[1]] = 'X';

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

    intersect();

  }

  function intersect(){
    let encounter = false;
    for(const mark of marks){
      if(mark.location[0] == location[0] && mark.location[1]== location[1]){
        updateText("You encountered an obstacle!");
        encounter = true;
      }
    }
    if(!encounter){
      updateText("-");
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
        <div>
          {text}
        </div>
      </header>
    </div>
  );
}

export default Other;