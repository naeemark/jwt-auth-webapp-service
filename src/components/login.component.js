import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userNameOrEmail: 'abc', password: 'Abc@12345',
            label: ''
        }
        this.callLoginApi = this.callLoginApi.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    callLoginApi(event) {
        console.log("Login Button Clicked");
        axios.get('https://jwt-auth-service.naeemark.usw1.kubesail.org/api/health')
            .then(response => {
                this.setState({ label: response.data.serviceName })
                console.log(response.data);
            })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.callLoginApi}>
                    <h3>Login</h3>
                    <h4>{this.state.label}</h4>

                    <div className="form-group">
                        <label>Username or Email</label>
                        <input name="userNameOrEmail" type="text" className="form-control" placeholder="Enter Username or Email" required
                            value={this.state.userNameOrEmail}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" placeholder="Enter password" required
                            onChange={this.handleInputChange} value={this.state.password}
                        />
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                </form>
            </div >
        );
    }
}
