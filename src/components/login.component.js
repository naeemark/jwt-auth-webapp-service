import React, { Component } from "react";

const callLoginApi = (event) => {
    console.log("Login Button Clicked", event);
}

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username or Email</label>
                    <input type="text" className="form-control" placeholder="Enter Username or Email" defaultValue="jimmy1970" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" defaultValue="Abc@12345" required />
                </div>
                {/* 
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <hr />

                <button type="submit" className="btn btn-primary btn-block" onClick={callLoginApi}>Submit</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </form>
        );
    }
}
