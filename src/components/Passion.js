import React from 'react';
import { Media, CardBody, Card, CardImg, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function Passion() {
    return (
        <div className="slideContainer p-4">
            <Card id='passionCard'>
                <CardImg src='' />
                <CardBody>
                    <CardTitle>
                        <h1>What Inspires Me</h1>
                    </CardTitle>
                    Coming from a background of support in both Information Technology and Fitness has allowed me to express my logical, methodical nature, but not any of my expressive traits. When I discovered Web Development, it just clicked. Creating concise code, elegant web design, and responsive layouts sparked a fire in me that I never knew existed. It allows me to give my creativity and vision a form that can be shared with others. I've never stopped running with it since.
                    <Stagger in delay={240}>
                        <Fade in>
                            <Media>
                                <Media object src={baseUrl + 'images/htmlicon.png'} />
                                <Media body>
                                    <Media heading>
                                        HTML & CSS
                                        </Media>
                                    HTML brings order to chaos and gives my pages a canvas. CSS allows me to style and paint that canvas in a limitless amount of ways.
                                        </Media>
                            </Media>
                        </Fade>
                        <Fade in>
                            <Media>
                                <Media object src={baseUrl + 'images/reacticon.png'} />
                                <Media body>
                                    <Media heading>
                                        REACT & JAVASCRIPT
                                        </Media>
                                    React is my library of choice. The modular nature of components lends itself to code that is extremely efficient and highly-reusable. The underlying Javascript allows me to give my websites logic and life.
                                        </Media>
                            </Media>
                        </Fade>
                        <Fade in>
                            <Media>
                                <Media object src={baseUrl + 'images/analyticsicon.png'} />
                                <Media body>
                                    <Media heading>
                                        SUPPORT & ANALYTICS
                                        </Media>
                                    I love all things data. From a Service Desk Technician to a Business Analyst, I love everything process related. Data drives everything, and it is behind every decision I make in Web Development.
                                        </Media>
                            </Media>
                        </Fade>
                    </Stagger>
                </CardBody>
            </Card>
        </div>
    );
}

export default Passion;