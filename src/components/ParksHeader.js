import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

class ParksHeader extends React.Component {
    render() {
        return (
            <div className="row">
            <div className="column">
                <Header as='h1' color='green' textAlign='center' icon>
                    <Icon name="tree"/>
                    National Parks
                <Header.Subheader color='green'>Establishment Timeline</Header.Subheader>
                </Header>              
            </div>
            </div>                   
        )
    }
}

export default ParksHeader;