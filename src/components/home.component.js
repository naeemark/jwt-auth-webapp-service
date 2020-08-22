import React, { Component } from "react";

export default class Home extends Component {

    render() {
        return (
            <div>
                <h3>Welcome <p className="name">{this.props.name}</p></h3>
                <hr></hr>
                <p className="label-refresh">Please <i><a href="/login">Refresh</a></i> to end your session</p>
            </div>
        );
    }
}
