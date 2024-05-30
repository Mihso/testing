
import { useState } from 'react';
import './weather.css';

function Weather() {

    const [title, updateTitle] = useState();
    const [periods, updatePeriods] = useState([]);
    const [description, updateDescription] = useState();
    const [url, updateData] = useState();
    const [link, updateLink] = useState();

    async function getData() {
        const api = "https://api.weather.gov/alerts/active?area=CA";
        const weather = "https://api.weather.gov/zones/forecast/CAZ006/forecast";
        const response = await fetch(api);
        const weatherResponse = await fetch(weather);
        const data = await response.json();
        const weatherData = await weatherResponse.json();
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