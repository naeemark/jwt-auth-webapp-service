import React, { Component } from "react";

function sayHello() {
    console.log("Signup Button Clicked");
}

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>


                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <hr />
                <button type="submit" className="btn btn-primary btn-block" onClick={sayHello}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">Login?</a>
                </p>
            </form>
        );
    }
}