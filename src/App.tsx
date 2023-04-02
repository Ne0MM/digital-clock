import './App.css';
import HourTick from './Components/HourTick';

function App() {
  return (
    <div className="App">
      <div className='clockContainer'>
        <div className="timeContainer">
          <div className='blur'></div>
          <div className='tickIndicator'></div>
          <HourTick/>
        </div>
        <div className="timeContainer"></div>
        <div className="timeContainer"></div>
      </div>

    </div>
  );
}

export default App;
