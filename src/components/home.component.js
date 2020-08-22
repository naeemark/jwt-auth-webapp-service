import React, { Component } from "react";
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.callLoginApi = this.callLoginApi.bind(this)

    }

    callLoginApi(event) {
        axios.get('https://jwt-auth-service.naeemark.usw1.kubesail.org/api/user', { headers: { 'Authorization': this.props.accessToken } })
            .then(response => {
                console.log(response);
                alert(JSON.stringify(response.data))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    alert(error.response.data.message)
                }
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Welcome <p className="name">{this.props.name}</p></h3>
                <hr />
                <ul>
                    <li><a href="/" onClick={this.callLoginApi}> Get User JSON </a></li>
                    <li><a href={"https://jwt.io/#debugger-io?token=" + this.props.accessToken} target="_blank" rel="noopener noreferrer">Validate Token on jwt.io</a></li>
                </ul>
                <hr />
                <p className="label-refresh">Please <i><a href="/login">Refresh</a></i> to end your session</p>
            </div >
        );
    }
}
