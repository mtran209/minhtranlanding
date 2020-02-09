import React, { Component } from 'react';
import { EXPERIENCE } from '../shared/experience';
import { Media, Modal, ModalHeader } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

class WorkExperience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            featuredExp: 1,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    };

    handleClick(e) {
        this.toggleModal();
        this.setState({
            featuredExp: e,
        });
    }

    render() {

        const featuredWork = EXPERIENCE.filter(exp => (exp.id === this.state.featuredExp))[0];

        return (
            <div className="container d-flex slideContainer">
                <Stagger in delay={240}>
                    {EXPERIENCE.map(experience => {
                        return (
                            <Fade in key={experience.id}>
                                <div className="experienceCard" id={experience.id} key={experience.id} onClick={() => this.handleClick(experience.id)}>
                                    <Media className="expmediabody">
                                        <Media left href="#">
                                            <Media className="pl-3" id="expmedia" object src={baseUrl + experience.image} />
                                        </Media>
                                        <Media style={{ fontSize: '2.5vmin' }} body>
                                            <Media heading>{experience.company}</Media>
                                            {experience.position}
                                        </Media>
                                    </Media>
                                </div>
                            </Fade>
                        )
                    })}
                </Stagger>
                <Modal
                    isOpen={this.state.isOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        <Media object src={baseUrl + featuredWork.image} />{'   '}{featuredWork.company}
                    </ModalHeader>
                    <Media>
                        <Media body>
                            <Media className="text-center mb-3" heading>
                                {featuredWork.position}
                            </Media>
                            <ul>
                                <li>{featuredWork.p1}</li>
                                <li>{featuredWork.p2}</li>
                                <li>{featuredWork.p3}</li>
                                <li>{featuredWork.p4}</li>
                            </ul>
                        </Media>
                    </Media>
                </Modal>
            </div>
        );
    }
}

export default WorkExperience;