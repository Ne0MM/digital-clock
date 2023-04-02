type Props = {}

function HourTick({}: Props) {

    const trans = 1;

  return (
    <div className="tickContainer" style={{['--trans-value' as any] : `${trans}rem`}}>
        <div className="HourBox"></div>
        <div className="HourBox"></div>
        <div className="HourBox">1</div>
        <div className="HourBox">2</div>
        <div className="HourBox">3</div>
        <div className="HourBox">4</div>
        <div className="HourBox">5</div>
        <div className="HourBox">6</div>
        <div className="HourBox">7</div>
        <div className="HourBox">8</div>
        <div className="HourBox">9</div>
        <div className="HourBox">10</div>
        <div className="HourBox">11</div>
        <div className="HourBox">12</div>
        <div className="HourBox"></div>
        <div className="HourBox"></div>
    </div>
  )
}

export default HourTick