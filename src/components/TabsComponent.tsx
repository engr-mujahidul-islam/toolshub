import React, { useState } from 'react';
import './TabsComponent.css'; // Optional custom styles

const links = [
  { id: 'todayForecast', label: 'Today Forecast', url: 'https://www.accuweather.com/en/us/new-york/10021/weather-forecast/349727' },
  { id: 'radarPage', label: 'Radar Page', url: 'https://www.accuweather.com/en/us/new-york/10021/weather-radar/349727' },
  { id: 'appNewYorkPage', label: 'App Preview (NY)', url: 'https://www.accuweather.com/app/today?location-key=recent' },
  { id: 'webApp', label: 'Web App', url: 'https://www.accuweather.com/app' },
  { id: 'webAppToday', label: 'App Preview Today', url: 'https://www.accuweather.com/app/today' },
  { id: 'webAppOne', label: 'Web App (one)', url: 'https://one.accuweather.com/app' },
  { id: 'webAppOneToday', label: 'Web App (one), Today', url: 'https://one.accuweather.com/app/today' },
];

const LinksList: React.FC = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`Copied: ${text}`);

    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundColor = 'green';
      element.style.color = 'white';
    }
  };

  const clearAllStyles = () => {
    links.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        element.style.backgroundColor = '';
        element.style.color = '';
      }
    });
    setCopiedText('');
  };

  return (
    <div className="container">
      {links.map((item) => (
        <div className="nameItem" key={item.id}>
          <b>{item.label}</b>
          <p id={item.id}>{item.url}</p>
          <a className="btn btn-success" href={item.url} target="_blank" rel="noreferrer">
            Visit
          </a>
          <button
            className="btn btn-success ms-2"
            onClick={() => copyText(item.url, item.id)}
          >
            Copy
          </button>
        </div>
      ))}

      {copiedText && <p id="alertMsg">{copiedText}</p>}

      <button
        className="btn btn-danger mt-3"
        style={{ float: 'right' }}
        onClick={clearAllStyles}
      >
        Clear Selection
      </button>
    </div>
  );
};

export default LinksList;
