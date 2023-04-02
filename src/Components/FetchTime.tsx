import { useEffect } from "react";
type Props = {
    setDateMap : (params : any) => any;
    setDate : (params : string) => any;
    dateMap : any,
    date : string,
}

function FetchTime(props: Props) {


    //Update time every second and turn into a map of integers

    useEffect(() => {
        const updateTime = setInterval(() => {
            props.setDate(new Date().toLocaleString());
            let myDate : string = new Date().toLocaleString();
            let dateHour : string[] = myDate.split(",");
            
            //Get the hours in a number array
            
            let hoursString : string[] = dateHour[1].split(":");
            let dayTime : string = hoursString[2].split(" ")[1];
        
            let hour : number[] = hoursString.map((element, index) : number => {

                if(index == 0 && dayTime == "PM") return (parseInt(element) + 12); // add 12hrs when is PM
            
                else return (parseInt(element));
            })
        
            //get the days in a number array
        
            let day : number[] = dateHour[0].split("/").map((e) => {
                return parseInt(e)
            })
        
            let updatedTimeMap = {dayTime : dayTime,
                    date : {
                    day : day[1],
                    month : day[0],
                    year : day[2],
                    hour : hour[0],
                    minute : hour[1],
                    seconds : hour[2],}}

            props.setDateMap(updatedTimeMap);
        }, 1000);
    
        return () => clearInterval(updateTime);
      }, []);

  return null
}

export default FetchTime