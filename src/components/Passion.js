import React from 'react';
import { Media, CardBody, Card, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

function Passion() {
    return (
        <div className="container slideContainer p-4">
            <Fade in delay={50} duration={400}>
            <Card id='passionCard' style={{padding: '2vmin'}}>
                <CardBody style={{fontSize: '2.5vmin'}}>
                <Stagger in duration={700} delay={240}>
                    <Fade in>
                    <CardTitle>
                        <h1>What Inspires Me</h1>
                    </CardTitle>
                    </Fade>
                    <Fade in>
                    Coming from a background of support in both <span id="emtext">Information Technology and Fitness</span> has allowed me to express my logical, methodical nature, but not any of my expressive traits. When I discovered <span id="emtext">Web Development</span> it gave me an outlet for that expression. Creating concise code, elegant web design, and responsive layouts sparked a fire in me that I never knew existed. It allows me to give my creativity and vision a form that can be shared with others. I've never stopped running with it since.
                    </Fade>
                        <Fade in>
                            <Media id='passionmedia'>
                                <Media object src={baseUrl + 'images/htmlicon.png'} />
                                <Media body>
                                    <Media heading>
                                        HTML & CSS
                                        </Media>
                                        <span id="emtext">HTML</span> brings order to chaos and gives my pages a canvas. <span id="emtext">CSS</span> allows me to style and paint that canvas in a limitless amount of ways.
                                        </Media>
                            </Media>
                        </Fade>
                        <Fade in>
                            <Media id='passionmedia'>
                                <Media object src={baseUrl + 'images/reacticon.png'} />
                                <Media body>
                                    <Media heading>
                                        REACT & JAVASCRIPT
                                        </Media>
                                        <span id="emtext">React</span> is my library of choice. The modular nature of components lends itself to code that is extremely efficient and highly-reusable. The underlying <span id="emtext">Javascript</span> allows me to give my websites logic and life.
                                        </Media>
                            </Media>
                        </Fade>
                        <Fade in>
                            <Media id='passionmedia'>
                                <Media object src={baseUrl + 'images/analyticsicon.png'} />
                                <Media body>
                                    <Media heading>
                                        SUPPORT & ANALYTICS
                                        </Media>
                                    I love all things data. From a Service Desk Technician to a Business Analyst, I love everything process related. <span id="emtext">Data</span> drives everything, and it is behind every decision I make in Web Development.
                                        </Media>
                            </Media>
                        </Fade>
                    </Stagger>
                </CardBody>
            </Card>
            </Fade>
        </div>
    );
}

export default Passion;