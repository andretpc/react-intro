import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        };
    }
    onMakeMeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    };
    onReset() {
        this.setState({
            age: this.props.initialAge
        });
    };

    render() {
        return (
            <div>
                <p>username = {this.props.name}, age = {this.state.age} hb = {this.props.user.hbb[0]}, {this.props.user.hbb[1]}</p>
                <hr/>
                <button onClick={this.onMakeMeOlder.bind(this)} className={"btn btn-primary"}>make me older</button>
                &nbsp;
                <button onClick={this.onReset.bind(this)} className={"btn btn-primary"}>reset age</button>
            </div>
        );

    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
}﻿