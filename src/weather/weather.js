
import { useState } from 'react';
import './weather.css';

function Weather() {

    const [title, updateTitle] = useState();
    const [periods, updatePeriods] = useState([]);
    const [areas, updateAreas] = useState([]);
    const [url, updateURL] = useState("https://api.weather.gov/zones/forecast/ALZ015");
    const [link, updateLink] = useState();

    async function getData() {
        const api = "https://api.weather.gov/alerts/active?area=CA";
        const weather = `${url}/forecast`;
        const areas = "https://api.weather.gov/zones/forecast/";
        const response = await fetch(api);
        const weatherResponse = await fetch(weather);
        const areasResponse = await fetch(areas);
        const data = await response.json();
        const weatherData = await weatherResponse.json();
        const areasData  =await areasResponse.json();
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
        updateTitle(data.title);
        updatePeriods(weatherData.properties.periods);
        // updateData(data.);
        // updateDescription(data.bio);
        // updateLink(data.html_url);
    }
    
    getData();

  return (
    <div className="Weather">
    <header className='Weather-header'>
        <div style={{'fontSize': '40px', 'fontWeight': '400'}}>
            {title} 
        </div>
        <select value={url} onChange={e => updateURL(e.target.value)}>
        {
          areas.map((data, idx) => {
            return(
              <option value={data} key={idx}>{data}</option>
            );
          })
        }
      </select>
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
      </header>
    </div>
  );
}

export default Weather;