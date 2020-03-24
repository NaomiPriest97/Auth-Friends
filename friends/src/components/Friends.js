import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);

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