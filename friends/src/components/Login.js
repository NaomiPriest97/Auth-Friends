import React from 'react';
//import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        login: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    // componentDidMount = () => {
    //   let token = localStorage.getItem('token');
    //     if(token){
    //         this.setState.login = true;
    //     }
    // };

    login = e => {
        e.preventDefault();
            axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res.data, 'login console')
                localStorage.setItem('token', res.data.payload);
                // if(token){
                //     this.setState.login = true;
                // }
                this.props.history.push('/protected');
            })
            .catch(err => console.log(err.response)); 
        }
    
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