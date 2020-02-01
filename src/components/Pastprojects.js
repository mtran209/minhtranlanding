import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components';



function PastProjects() {
    return (
        <div className="container rowContainer">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="certificationCard">
                <Card id="pp">
                    <CardImg top src={baseUrl + "/images/bootstrap.jpg"} />
                    <CardBody>
                        <CardTitle><a href="http://html.minhtran.app" target="_blank">THE SPICED PUPS</a></CardTitle>
                        <span style={{fontSize: '2.1vmin'}}>My very first website - a lesson in <span id="emtext">HTML & CSS</span></span>
                    </CardBody>
                </Card>
            </div>
            </FadeTransform>
            <FadeTransform
            delay={300}
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="certificationCard">
                <Card id="pp">
                    <CardImg top src={baseUrl + "/images/react1.jpg"} />
                    <CardBody>
                        <CardTitle><a href="http://ravenous.minhtran.app" target="_blank">RAVENOUS</a></CardTitle>
                        <span style={{fontSize: '2.1vmin'}}>My 2nd project - a lesson in calling <span id="emtext">APIs</span></span>
                    </CardBody>
                </Card>
            </div>
            </FadeTransform>
            <FadeTransform
            delay={500}
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="certificationCard">
                <Card id="pp">
                    <CardImg top src={baseUrl + "/images/react2.png"} />
                    <CardBody>
                        <CardTitle><a href="http://react.minhtran.app" target="_blank">YUMMY APP</a></CardTitle>
                        <span style={{fontSize: '2.1vmin'}}>My first foray into <span id="emtext">React.JS and React.Router</span></span>
                    </CardBody>
                </Card>
            </div>
            </FadeTransform>
            <FadeTransform
            delay={900}
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="certificationCard">
                <Card id="pp">
                    <CardImg top src={baseUrl + "/images/image1.png"} />
                    <CardBody style={{fontSize: '2vmin'}}>
                        <CardTitle><a href="http://minhtran.app" target="_blank">MINH TRAN</a></CardTitle>
                        <span style={{fontSize: '2.1vmin'}}>My <span id="emtext">portfolio</span> website - an emphasis on responsiveness</span>
                    </CardBody>
                </Card>
            </div>
            </FadeTransform>
        </div>
    )
}

export default PastProjects;