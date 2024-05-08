import { useState, useEffect } from "react";

function NPC(size){


    useEffect(() => {
        let interval = setInterval(() => {
            movement();
        }, 6000);

      },[]);

    const [location, updateLocation] = useState([Math.floor(Math.random(0)*10),Math.floor(Math.random(0)*10)])

    function movement(){
        let counter = Math.floor(Math.random() * 4);
        if(counter == 0){
            if(location[0] >= size){
                updateLocation([0, location[1]]);
            }
            else{
                updateLocation([location[0] + 1, location[1]]);
            }
        }
        if(counter == 1){
            if(location[0] <= 0){
                updateLocation([size - 1, location[1]]);
            }
            else{
                updateLocation([location[0] - 1, location[1]]);
            }
        }
        if(counter == 2){
            if(location[1] >= size){
                updateLocation([location[0], 0]);
            }
            else{
                updateLocation([location[0], location[1] + 1]);
            }
        }

        if(counter == 3){
            if(location[1] <= 0){
                updateLocation([location[0], size - 1]);
            }
            else{
                updateLocation([location[0], location[1] - 1]);
            }
        }

    }

    return(
        {location}
        
    );
}

export default NPC;