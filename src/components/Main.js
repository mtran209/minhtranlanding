import React, { Component } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import PastProjects from './PastProjects';
import Header from './Header';
import Certifications from './Certifications';
import Home from './Home';
import { baseUrl } from '../shared/baseUrl';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid p-0" style={{ height: '100vh' }}>
                <div className="d-flex p-0">
                    <Header />
                    <Switch>
                        <Route exact path="/home" render={() => <Home />} />
                        <Route exact path="/certifications" render={() => <Certifications />} />
                        <Route exact path="/pastprojects" render={() => <PastProjects />} />
                    </Switch>
                    <img className="bannerImage" src={baseUrl + 'images/banner1small.png'} />
                </div>
                <Redirect to='/home' />
            </div>
        )
    }
}

export default withRouter(Main);