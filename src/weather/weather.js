
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
    <div className="App">
    <header className="App-header">
        <div>
            {title} 
        </div>
        <div className='about' style={{'margin': "10px"}}>
        {description}
        </div>

        <div className="gridder">
        {
            periods.map((data, idx) => (
                <div className="entry" key={idx}>
                <div>{data.name}</div>
                <div>{data.detailedForecast}</div>
                </div>
              )
            )
        }
        </div>

        Contact Information:
        <div style={{'marginBottom':'20px'}}>
          510-604-4520
          moshimo90696@gmail.com
        </div>

        Link to Github.
        <div style={{'marginTop': '20px'}}>
          {link}
        </div>
      </header>
    </div>
  );
}

export default Weather;