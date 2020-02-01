import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components';



function PastProjects() {
    return (
        <div className="container slideContainer">
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
                        My very first website - a lesson in <span id="emtext">HTML & CSS</span>
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
                        My 2nd project - a lesson in <span id="emtext">APIs</span>
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
                        My foray in <span id="emtext">React.JS</span>
                    </CardBody>
                </Card>
            </div>
            </FadeTransform>
            <FadeTransform
            delay={700}
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="certificationCard">
                <Card id="pp">
                    <CardImg top src={baseUrl + "/images/reactnative.jpg"} />
                    <CardBody>
                        <CardTitle><a href="http://html.minhtran.app" target="_blank">NUCAMPSITE</a></CardTitle>
                        My <span id="emtext">BootCamp</span> course project
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
                    <CardBody>
                        <CardTitle><a href="http://minhtran.app" target="_blank">MINH TRAN</a></CardTitle>
                        My first <span id="emtext">showcase</span> website
                    </CardBody>
                </Card>
            </div>
            </FadeTransform>
        </div>
    )
}

export default PastProjects;