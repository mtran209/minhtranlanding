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
            <div className="container-fluid p-0 d-flex mainBanner">
                <div className="d-flex slideContainer">
                    <h1>Minh Tran is</h1>
      
                </div>
            </div>
        )
    }
}

export default Home;