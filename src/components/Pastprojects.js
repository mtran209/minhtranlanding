import React from 'react'
import TextLoop from 'react-text-loop';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { baseUrl } from './baseUrl'



function PastProjects() {
    return (
        <div className="container slideContainer">
            <div className="d-lg-flex justify-content-center align-items-center py-5">

                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/bootstrap.jpg"} />
                        <CardBody className="m-0 p-0">
                            <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">The Spiced Pups</a></CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/react1.jpg"} />
                        <CardBody className="m-0 p-0">
                            <CardTitle className="my-auto"><a href="http://ravenous.minhtran.app" target="_blank">Ravenous</a></CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/react2.png"} />
                        <CardBody className="my-auto p-0">
                            <CardTitle className="my-auto"><a href="http://react.minhtran.app" target="_blank">Yummy App!</a></CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/reactnative.jpg"} />
                        <CardBody className="m-0 p-0">
                            <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">NucampSite</a></CardTitle>
                        </CardBody>
                    </Card>
                </div>
        </div>
    )
}

export default PastProjects;