import React from 'react';
import axios from 'axios';
//import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();

        axios
        .post('https://localhost:3000/api/login', this.state.credentials)
        .then(res => {
            console.log(res.data, 'login console')
            localStorage.setItem('token', JSON.stringify(res.data));
            this.props.history.push('/protected');
        })
        .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;