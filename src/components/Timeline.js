import React from 'react';
import MonthlyEvent from './MonthlyEvent';
import * as jsonfile from '../data/nationalparks.json';
import ParksHeader from './ParksHeader';
import TopMenu from './TopMenu';
//import BottomMenu from './BottomMenu';

//getting the json with the timeline data
const someEvents = jsonfile.default;
const distinctYears = [...new Set(someEvents.map(x => x.Year))]; //a new set with distinct years
const eventsMapping = () => {
    let eventsMap = new Map(); //hosts key value pairs similar to an object
    for (let year of distinctYears) {
        let yearlyEvents = someEvents.filter((event) => {
            if (event.Year === year) {
                return event;
            }
        })
        eventsMap.set(year, yearlyEvents)  //creates Map with the key being the year and array with all objects for that year
    }
    return eventsMap;
}

class Timeline extends React.Component {
    
    renderHelper = () => {
        return (
            distinctYears.map((y, index) => {
                return ( 
                    <div key={index} className="ui text container">
                    <div className="ui grid">
                        <div key={index} className="row" name={index + "_" + y}>
                            <div className="five wide column">
                                <div className="ui vertical blue inverted fluid menu">
                                    <h5 className="ui center aligned header item" >{y}</h5>
                                </div>
                            </div>
                        </div>
                         <MonthlyEvent e={eventsMapping().get(y)} />                                
                    </div>
                    </div>                    
                )
            }))
    }
    render() {      
        return (
            <div className="ui text container">
                <div className="ui grid">
                    <TopMenu yearArray={distinctYears} e={someEvents}/>
                    <div className="row"><div className="column"></div></div>
                    <div className="row"><div className="column"></div></div>
                    <div className="row"><div className="column"></div></div>
                    <div className="row"><div className="column"></div></div>
                    <ParksHeader/>
                    <div className="row"><div className="column"></div></div>
                    {this.renderHelper()}

                </div>
            </div>
        )
    }
}
export default Timeline;