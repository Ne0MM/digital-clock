type Props = {
  hourData : number,
}

function HourTick(props: Props) {

  const hourToRem = () => {
    let hourProxy = props.hourData
    if (props.hourData > 12 && props.hourData <= 24){
      hourProxy -= 12 
    }
    let updatedRem = -(hourProxy * 4) + 5;

    return updatedRem
  }

  return (
    <div className="tickContainer" style={{['--trans-value' as any] : `${hourToRem()}rem`}}>
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