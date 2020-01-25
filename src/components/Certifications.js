import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { CERTIFICATIONS } from '../shared/certifications';

function Certifications() {
    return (
        <div className="container-fluid">
            {CERTIFICATIONS.map(certification => {
                return (
                    <Card>
                        <CardImg src={baseUrl + certification.image} />
                        <CardBody>
                        <CardTitle>{certification.title}</CardTitle>
                        <CardSubtitle>{certification.date}</CardSubtitle>
                        <CardText>{certification.description}</CardText>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}

export default Certifications;