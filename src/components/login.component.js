import React, { Component } from "react";
import axios from 'axios';
import Home from "./home.component";

export default class Login extends Component {

    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            userNameOrEmail: 'jimmy1970', password: 'Abc@12345',
            name: ''
        }
        this.callLoginApi = this.callLoginApi.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    callLoginApi(event) {
        axios.post('https://jwt-auth-service.naeemark.usw1.kubesail.org/api/login', this.state)
            .then(response => {
                this.setState({ name: response.data.user.name })
                console.log(response.data);
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    alert(error.response.data.message)
                }
            });
        event.preventDefault();
    }

    render() {
        if (this.state.name)
            return <Home name={this.state.name} />;
        return (
            <div>
                <form onSubmit={this.callLoginApi}>
                    <h3>Login</h3>
                    <h4>{this.state.name}</h4>

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
