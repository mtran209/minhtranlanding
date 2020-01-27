import React, { Component } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import PastProjects from './PastProjects';
import Header from './Header';
import Certifications from './Certifications';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <Header />
                <Switch>
                    <Route exact path="/certifications" render={() => <Certifications />} />
                    <Route exact path="/pastprojects" render={() => <PastProjects />} />
                </Switch>
                <Redirect to='/pastprojects' />
            </div>
        )
    }
}

export default withRouter(Main);