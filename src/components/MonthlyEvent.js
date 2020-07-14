import React from 'react';
import AccordionEvent from './AccordionEvent';

class MonthlyEvent extends React.Component {
    
    distinctMonths = [...new Set(this.props.e.map(x => x.Month))];

    eventsMapping = () => {
        let monthlyMap = new Map(); //creates new Map (key value pairs)
        for (let month of this.distinctMonths) {  //loop through set of distinct months. example: (Jan, Feb, Mar)
            let monthlyEvents = this.props.e.filter((event) => {  //filter only returns what is true inside its function
                if (event.Month === month) {           //filter thru data when Month is equal to the month in the distinctMonths set
                    return event;
                }
            })
            monthlyMap.set(month, monthlyEvents)  //creates Map with the key being the year and array with all objects for that year
        }
        return monthlyMap;
    }
    render(){

        return (this.distinctMonths.map((mth, i) => {
            //mthArray = this.eventsMapping().get(mth);
            
                return (
                    <div key={i} className="row">          
                        <div className="right floated four wide column">
                            <div className="ui vertical inverted green fluid menu">
                                <h5 className="ui right aligned header item">{mth}</h5>
                            </div>
                        </div>
                        <div className="left aligned eleven wide column">
                            <div className="ui vertical inverted olive fluid menu">
                                <AccordionEvent mthArray={this.eventsMapping().get(mth)}/>
                                
                            </div>
                        </div>
                    </div>                    
                )
            
            })

        
        )
    }
}

export default MonthlyEvent;