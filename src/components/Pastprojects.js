import React from 'react'
import TextLoop from 'react-text-loop';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl'
import { Fade, FadeTransform, Stagger } from 'react-animation-components';



function PastProjects() {
    return (
        <div className="container slideContainer">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="certificationCard">
                <Card>
                    <CardImg top src={baseUrl + "/images/bootstrap.jpg"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">The Spiced Pups</a></CardTitle>
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
                <Card>
                    <CardImg top src={baseUrl + "/images/react1.jpg"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://ravenous.minhtran.app" target="_blank">Ravenous</a></CardTitle>
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
                <Card>
                    <CardImg top src={baseUrl + "/images/react2.png"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://react.minhtran.app" target="_blank">Yummy App!</a></CardTitle>
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
                <Card>
                    <CardImg top src={baseUrl + "/images/reactnative.jpg"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">NucampSite</a></CardTitle>
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
                <Card>
                    <CardImg top src={baseUrl + "/images/image1.png"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://minhtran.app" target="_blank">Minh Tran</a></CardTitle>
                    </CardBody>
                </Card>
            </div>
            </FadeTransform>
        </div>
    )
}

export default PastProjects;