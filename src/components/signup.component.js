import React, { Component } from "react";
import axios from 'axios';
import Home from "./home.component";

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            name: '',
            userName: '',
            email: '',
            password: '',
            status: '',
            accessToken: ''
        }
        this.callSignupApi = this.callSignupApi.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }


    callSignupApi(event) {
        axios.post('https://jwt-auth-service.naeemark.usw1.kubesail.org/api/signup', this.state)
            .then(response => {
                this.setState({ status: response.status, name: response.data.user.name, accessToken: response.data.accessToken })
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
        if (this.state.status === 200) {
            return <Home name={this.state.name} accessToken={this.state.accessToken} />;
        }
        else {
            return (
                <form onSubmit={this.callSignupApi}>
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="text" className="form-control" placeholder="Name" required
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input name="userName" type="text" className="form-control" placeholder="Username" required
                            value={this.state.userName}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input name="email" type="email" className="form-control" placeholder="Email" required
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" placeholder="Password" required
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                    </div>

                    <hr />
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">Login?</a>
                    </p>
                </form>
            );
        }
    }
}