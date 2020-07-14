import React from 'react';
import { Accordion, Label } from 'semantic-ui-react';

class AccordionEvent extends React.Component {
   
    render() {
        return this.props.mthArray.map((obj, i) => {
            const mypanels = [{
                key: `panel-${i}`,
                title: {
                    content: <Label content={' ' + obj["Name"]} />,
                },
                content: {
                    content: (
                        <div className="ui vertical fluid inverted olive menu" name={obj["Name"]}>
                            <div className="active item">
                                Date Established: {obj["Month"] + " " + obj["Day"] + ", " + obj["Year"]}
                            </div>
                            <div className="active item">
                                Park Area in 2019: {obj["Park Area in 2019"]}
                            </div>
                            <div className="active item">
                                Annual Recreation Visitors in 2019: {obj["Annual Recreation visitors in 2019"]}
                            </div>
                            <div className="active item">Location: {obj["Location"]}</div>
                            <div className="active item">{obj["Description"]}</div>  
                            <div className="active item">
                                <img src={obj["Image Link"]} alt={obj["Name"]}/>
                            </div>                      
                        </div>
                )},
            }]
            return (
                <div key={i} className="item">
                    <Accordion
                        panels={mypanels}
                        exclusive={false}
                        fluid
                        defaultActiveIndex={[0, 1]}
                    />
                </div>
            )
        })

    }
}

export default AccordionEvent;