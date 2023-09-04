import activityData from './data.json'
import MainWidget from './Components/MainWidget';
import Activity from './Components/Activity';

import { useState } from 'react';

console.log(activityData)

function App() {

  const [period, setPeriod] = useState('daily');

  return (
    <div className='dashboard'>
      <MainWidget setPeriod={setPeriod}/>
      {activityData.map(activity => {
        return (<Activity key={activity.title} period={period} activity={activity}/>)
      })}
    </div>
  );
}

export default App;
