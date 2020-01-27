import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg, CardColumns } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { CERTIFICATIONS } from '../shared/certifications';

function Certifications() {
    return (
        <div className="container-fluid" id='mainbackground'>
            <div className="row">
                <CardColumns>
                {CERTIFICATIONS.map(certification => {
                    return (
                            <Card className="certificationCard">
                                <CardImg right src={baseUrl + certification.image} />
                                <CardBody>
                                    <CardTitle>{certification.name}</CardTitle>
                                    <CardSubtitle>{certification.date}</CardSubtitle>
                                    <CardText>{certification.description}</CardText>
                                </CardBody>
                            </Card>
                    )
                })}
                </CardColumns>
            </div>
        </div>
    )
}

export default Certifications;