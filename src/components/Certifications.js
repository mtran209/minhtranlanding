import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { CERTIFICATIONS } from '../shared/certifications';
import { Fade } from 'react-animation-components';

function Certifications() {
    return (
      
        <div className="container d-flex rowContainer">
                {CERTIFICATIONS.map(certification => {
                    return (
                        <Fade in key={certification.id}>
                        <div className="certificationCard">
                            <Card>
                                <CardImg right src={baseUrl + certification.image} />
                                <CardBody>
                                    <CardTitle>{certification.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                        </Fade>
                    )
                })}
        </div>
    )
}

export default Certifications;