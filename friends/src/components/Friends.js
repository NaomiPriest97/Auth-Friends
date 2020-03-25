import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import axios from 'axios';
//import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getFriends();
    }

    getFriends = () => {
        axios
        .get('https://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data, 'friends console');

            this.setState({
                friends: res.data
            })
        })

    }

    render(){
        return
    }
};

export default Friends;