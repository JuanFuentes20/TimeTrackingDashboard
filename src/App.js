import activityData from './data.json'
import MainWidget from './Components/MainWidget';
import Activity from './Components/Activity';

import { useState, useEffect } from 'react';

function App() {

  const [period, setPeriod] = useState('weekly');

  useEffect(() => {
    if(period){
      const timePeriodParagraphs = document.querySelectorAll('.time-period p');
  
    // Find the <p> element with the word "weekly" (case-insensitive)
    timePeriodParagraphs.forEach(paragraph => {
      if (paragraph.innerText.toLowerCase().includes(period)) {
        paragraph.style.opacity = 1;
        paragraph.style.fontWeight = 700 
      }
    })
    }
  }, [period]);
  

  return (
    <div className='dashboard'>
      <MainWidget setPeriod={setPeriod}/>
      {activityData.map(activity => {
        return (<Activity key={activity.title} period={period} activity={activity}/>)
      })}
      <div className="footer attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/JuanFuentes20">Juan Fuentes</a>.
      </div>
    </div>
  );
}

export default App;
