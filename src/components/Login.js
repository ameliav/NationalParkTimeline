import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import ParksHeader from './ParksHeader';
import history from '../history';
import Swal from 'sweetalert2';

class Login extends React.Component {

    state = { username: '', password: ''}

    usernameChange = (e, {value }) => {
        this.setState({ username: value });
    }
    passwordChange = (e, { value }) => {
        this.setState({ password: value });
    }

    handleSubmit = () => {
        const { username, password } = this.state;
        //console.log(`username: ${username}, password: ${password}`);
        if (username === 'admin' && password === 'test') {
            history.push('/#/timeline')
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Username is "admin" and Password is "test".',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
   } 

    render() {

        return (
        <div className="ui text container">
        <div className="ui grid">
            <div className="row"><div className="column"></div></div>
            <div className="row"><div className="column"></div></div>
            <ParksHeader/>
            <div className="row"><div className="column"></div></div>
            <div className="ui centered card">
            <Form size='large' onSubmit={this.handleSubmit}>
                    <Segment basic>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={this.usernameChange}/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={this.passwordChange}
                        />
                        <Button color='blue' fluid size='large'>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </div>
        </div>
        </div>
        )
    }
}

export default Login;