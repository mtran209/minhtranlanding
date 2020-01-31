import React from 'react'
import TextLoop from 'react-text-loop';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { baseUrl } from './baseUrl'



function PastProjects() {
    return (
        <div className="container slideContainer">
            <div className="certificationCard">
                <Card>
                    <CardImg top src={baseUrl + "/images/bootstrap.jpg"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">The Spiced Pups</a></CardTitle>
                    </CardBody>
                </Card>
            </div>
            <div className="certificationCard">
                <Card>
                    <CardImg top src={baseUrl + "/images/react1.jpg"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://ravenous.minhtran.app" target="_blank">Ravenous</a></CardTitle>
                    </CardBody>
                </Card>
            </div>
            <div className="certificationCard">
                <Card>
                    <CardImg top src={baseUrl + "/images/react2.png"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://react.minhtran.app" target="_blank">Yummy App!</a></CardTitle>
                    </CardBody>
                </Card>
            </div>
            <div className="certificationCard">
                <Card>
                    <CardImg top src={baseUrl + "/images/reactnative.jpg"} />
                    <CardBody>
                        <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">NucampSite</a></CardTitle>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default PastProjects;