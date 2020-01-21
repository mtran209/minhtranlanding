import React from 'react'
import TextLoop from 'react-text-loop';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { baseUrl } from './baseUrl'



function Main() {
    return (
        <div className="container-fluid p-0" id="mainbackground">
            <div className="d-flex flex-row justify-content-center align-items-center" style={{height: '66vh'}}>
                    <h1>
                        <TextLoop
                            children={['Apps', 'Design', 'Creativity', 'Innovation']}
                        />{" "}
                        <p>by Minh Tran</p>
                    </h1>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{height: '34vh'}}>
                <div className="col-sm-2 px-3">
                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/bootstrap.jpg"} />
                        <CardBody className="m-0 p-0">
                            <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">Bootstrap</a></CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-2 px-3">
                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/react1.jpg"} />
                        <CardBody className="m-0 p-0">
                            <CardTitle className="my-auto"><a href="http://ravenous.minhtran.app" target="_blank">React</a></CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-2 px-3">
                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/react2.png"} />
                        <CardBody className="my-auto p-0">
                            <CardTitle className="my-auto"><a href="http://react.minhtran.app" target="_blank">React</a></CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-2 px-3">
                    <Card className='p-2'>
                        <CardImg top src={baseUrl + "/images/reactnative.jpg"} />
                        <CardBody className="m-0 p-0">
                            <CardTitle className="my-auto"><a href="http://html.minhtran.app" target="_blank">React.Native</a></CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Main;