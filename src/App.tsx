import { useState} from 'react';
import './App.css';
import HourTick from './Components/HourTick';
import MinutesTick from './Components/MinutesTick';
import SecondsTick from './Components/SecondsTick';
import FetchTime from './Components/FetchTime';

function App() {

  interface dateInter{
    dayTime : string,
    date : {
      [key : string] : number,
    }
  }

  const [myDate, setMyDate] = useState("4/2/2023, 4:27:34 PM")
  const [dateMap, setDateMap] = useState<dateInter>({dayTime : "PM",date : { day : 0, month : 0, year : 0,hour : 0, minute : 0, seconds : 0,}})

  return (
    <div className="App">
      <div className='clockContainer'>
        <div className="timeContainer">
          <div className='blur'></div>
          <div className='tickIndicator'></div>
          <HourTick hourData={dateMap.date.hour} />
        </div>
        <div className="timeContainer">
          <div className='blur'></div>
          <div className='tickIndicator'></div>
          <MinutesTick minutesData={dateMap.date.minute} />
        </div>
        <div className="timeContainer">
          <div className="blur"></div>
          <div className="tickIndicator"></div>
          <SecondsTick secondsData={dateMap.date.seconds}/>
          <FetchTime setDateMap={setDateMap} dateMap={dateMap} setDate={setMyDate} date={myDate}/>
        </div>
      </div>

    </div>
  );
}

export default App;
