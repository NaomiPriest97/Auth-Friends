import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
//import axios from 'axios';
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
            console.log(res.data, 'friends console');

            this.setState({
                friends: res.data
            })
        })
        .catch(err => console.log(err));
    }

    

    render(){
        return (
            <div>
                {this.state.friends.map(friend => {
                    return(
                        <h2>{friend.name}</h2>
                    )
                })}
            </div>
        )
    }
};

export default Friends;