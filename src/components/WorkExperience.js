import React from 'react';
import { EXPERIENCE } from '../shared/experience';
import { CardSubtitle, CardTitle, Card, CardBody, CardImg, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

function WorkExperience() {
    return (
        <div className="container d-flex slideContainer">
            
            <Stagger in delay={240}>
            {EXPERIENCE.map(experience => {
                return (
                    <Fade in key={experience.id}>
                    <div className="experienceCard">
                        <Media id="expmediabody">
                            <Media left href="#">
                            <Media className="pl-3" id="expmedia" object src={baseUrl + experience.image} />
                            </Media>
                            <Media body>
                                <Media heading>{experience.company}</Media>
                                {experience.position}
                            </Media>
                        </Media>
                    </div>
                    </Fade>
                )
            })}
            </Stagger>
        </div>
    );
}

export default WorkExperience;