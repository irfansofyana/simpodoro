import React, { Component } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css'
import { Container, Row, Col, Button} from 'react-bootstrap';

export default class Timer extends Component {
    children = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
        
        return (
            <div className="time-wrapper">
                <p> <strong> Remaining Time </strong> </p>
                <div className="timer">{hours}:{minutes}:{seconds}</div>
            </div>
        )
    }

    render () {
        return (
            <Container>
                <div className="timer-container">
                    <Row>
                        <Col>
                            <CountdownCircleTimer
                                isPlaying
                                duration={1800}
                                colors="#361717"
                                children={this.children}
                                size={350}
                                strokeWidth={30}
                            >
                            </CountdownCircleTimer>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom" sz="lg">
                                Work
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="custom" sz="lg">
                                Short Rest
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="custom" sz="lg">
                                Long Rest
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom-long" sz="lg" block>
                                    Start
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom-long" sz="lg" block>
                                    Reset
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}