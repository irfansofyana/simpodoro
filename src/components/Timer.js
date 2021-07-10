import React, { Component } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css'
import { Container, Row, Col, Button} from 'react-bootstrap';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.defaultTimeDuration = 25 * 60 // 25 minutes in seconds
        this.changeTimerMode = this.changeTimerMode.bind(this);
        this.state = {
            isPlaying: false,
            timerMode: 'work',
            timeDuration: this.defaultTimeDuration,
            resetCounter: 0,
        }
        this.playTimer = this.playTimer.bind(this);
        this.resetRemainingTime = this.resetRemainingTime.bind(this);
    }

    changeTimerMode = (e) => {
        console.log(e);
        this.setState({
            timerMode: e
        });
    }

    playTimer = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }

    resetRemainingTime = () => {
        this.setState({
            resetCounter: this.state.resetCounter + 1,
            isPlaying: false
        })
    }

    renderTime = ({ remainingTime }) => {
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
                                key={this.state.resetCounter}
                                isPlaying={this.state.isPlaying}
                                duration={this.state.timeDuration}
                                colors="#361717"
                                children={this.renderTime}
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
                            <Button variant="custom" sz="lg" onClick={() => this.changeTimerMode("Work")}>Work</Button>
                        </Col>
                        <Col>
                            <Button variant="custom" sz="lg" onClick={() => this.changeTimerMode("ShortRest")}>Short Rest</Button>
                        </Col>
                        <Col>
                            <Button variant="custom" sz="lg" onClick={() => this.changeTimerMode("LongRest")}>Long Rest</Button>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom-long" sz="lg" block onClick={this.playTimer}>
                                {this.state.isPlaying ? 'Stop': 'Play'}
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom-long" sz="lg" block onClick={this.resetRemainingTime}>
                                Reset
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}