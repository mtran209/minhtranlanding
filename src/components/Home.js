import React, { Component } from 'react';
import { baseUrl } from '../shared/baseUrl';
import TextLoop from 'react-text-loop';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container slideContainer">
                <div className="d-flex slideContainer align-items-center p-5">
                    <h1>Hello, my name is <span style={{color: '#C87C66'}}>Minh</span>.</h1>
                        <h1>I'm a <span style={{color: '#C87C66'}}>Web Developer</span> and I'd love to build things with you!</h1>
                </div>
            </div>
        )
    }
}

export default Home;