import React, { Component } from "react";

function callSignupApi() {
    console.log("Signup Button Clicked");
}

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>


                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" required />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" required />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" required />
                </div>

                <hr />
                <button type="submit" className="btn btn-primary btn-block" onClick={callSignupApi}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">Login?</a>
                </p>
            </form>
        );
    }
}