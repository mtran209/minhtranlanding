import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg, CardColumns } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { CERTIFICATIONS } from '../shared/certifications';

function Certifications() {
    return (
        <div className="container">
            <div className="row">
                {CERTIFICATIONS.map(certification => {
                    return (
                        <div className="certificationCard">
                            <Card>
                                <CardImg right src={baseUrl + certification.image} />
                                <CardBody>
                                    <CardTitle>{certification.name}</CardTitle>
                                    <CardText>{certification.description}</CardText>
                                    <CardSubtitle>Completed: {certification.date}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Certifications;