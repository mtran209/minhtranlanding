import React, { Component } from 'react';
import { Switch, Redirect, Route, withRouter, Link } from 'react-router-dom';
import PastProjects from './PastProjects';
import Header from './Header';
import Certifications from './Certifications';
import Home from './Home';
import { baseUrl } from '../shared/baseUrl';
import TextLoop from 'react-text-loop';

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
                    <div className="slideContainer flex-md-column">
                        <span style={{marginTop: '5vh'}}><h3 style={{ fontFamily: 'Pacifico', fontSize: '5vh' }}><Link to='/home'><TextLoop
                            children={['Design', 'Support', 'Passion', 'Initiative']}
                        /></Link></h3>
                            <Link to='/home'><h3 style={{ fontFamily: 'Teko' }}>by Minh Tran</h3></Link></span>
                        <img className="bannerImage" src={baseUrl + 'images/banner2gray.png'} />
                    </div>
                </div>
                <Redirect to='/home' />
            </div>
        )
    }
}

export default withRouter(Main);