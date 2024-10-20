
import { useState } from 'react';
import './weather.css';

function Weather() {

    const [title, updateTitle] = useState("Nothing could be retrieved");
    const [periods, updatePeriods] = useState([]);
    const [areas, updateAreas] = useState([]);
    const [loading, updateLoading] = useState(true);
    const [url, updateURL] = useState("");

    async function start(){
      const areasW = "https://api.weather.gov/zones/forecast/";
      const areasResponse = await fetch(areasW);
      const areasData  = await areasResponse.json();
      let listAreas = [];

      let counter = 100;

      for(let l of areasData.features){
        if(counter == 0){
        listAreas.push(l.id);
        counter = 100;
        }
        counter-= 1;
      }
      updateAreas(listAreas);
    }

    async function getData(url) {
        const weather = `${url}/forecast`;
        const zoneInfo = url;
        const zoneResponse = await fetch(zoneInfo);
        const zoneData = await zoneResponse.json();
        if(zoneData.properties.state != null){

        const api = `https://api.weather.gov/alerts/active?area=${zoneData.properties.state}`;
        const response = await fetch(api);
        const weatherResponse = await fetch(weather);
        const data = await response.json();
        const weatherData = await weatherResponse.json();
        updateTitle(data.title);
        updatePeriods(weatherData.properties.periods);
      }
      else{
        updateTitle("Forecast information for this area not found.");
        updatePeriods([]);
      }

      updateLoading(false);
    }
    
    start();

  function handleChange(event){
    updateURL(event.target.value);
    updateLoading(true);
    updateTitle("Forecast information for this are is loading.");
    getData(event.target.value);
  }

  return (
    <div className="Weather">
    <header className='Weather-header'>
        <div style={{'fontSize': '40px', 'fontWeight': '400', 'marginBottom':'10px'}}>
            {title} 
        </div>
        <select className="weather-selection" value={url} onChange={(e) => {handleChange(e)}}>
          <option value="">Select an area.</option>
        {
          areas.map((data, idx) => {

            let urlSplit = data.split('/');
            
            return(
              <option value={data} key={idx}>{urlSplit[5]}</option>
            );
          })
        }
      </select>
      {!loading ? (
        <div className="gridder">
        {
            periods.map((data, idx) => {
              
              let lister = data.detailedForecast.split(".");
              return (
                <div className="entry" key={idx}>
                <div style={{'marginBottom' : '15px', 'fontSize':'30px', 'fontWeight':'800'}}>{data.name}</div>
                <div> <text className='weather-text'> Forecast : </text>{lister[0]}</div>
                <div><text className='weather-text'> Temperature : </text>{lister[1]}</div>
                <div><text className='weather-text'> Winds : </text>{lister[2] }</div>
                </div>
              );
            }
            )
        }
        </div>
      ): <div>loading...</div>}
      </header>
    </div>
  );
}

export default Weather;