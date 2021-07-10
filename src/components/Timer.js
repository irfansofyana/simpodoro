import React, { Component } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css'
import { Container, Row, Col, Button} from 'react-bootstrap';

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.defaultWorkDuration = 25 * 60 // 25 minutes in seconds
        this.defaultShortRestDuration = 5 * 60 // 5 minutes in seconds
        this.defaultLongRestDuration = 15 * 60 // 15 minutes in seconds 
        
        this.changeTimerMode = this.changeTimerMode.bind(this);
        this.playTimer = this.playTimer.bind(this);
        this.resetRemainingTime = this.resetRemainingTime.bind(this);

        this.state = {
            isPlaying: false,
            timerMode: 'Work',
            timeDuration: this.defaultWorkDuration,
            changeCounter: 0,
            colors: [
                ["#FF0000", 0.6],
                ["#FFD500", 0.3],
                ["#00FF00", 0.1],
            ]
        }
    }

    changeTimerMode = (mode) => {
        let colors =  [
            ["#FF0000", 0.6],
            ["#FFD500", 0.3],
            ["#00FF00", 0.1],
        ]
        let timeDur = this.defaultWorkDuration;
        if (mode === "ShortRest") {
            colors = [    
                ["#FFD500", 0.6],
                ["#FF8000", 0.3],
                ["#FF0000", 0.6],
            ]
            timeDur = this.defaultShortRestDuration;
        } else if (mode === "LongRest") {
            colors = [
                ["#00FF00", 0.6],
                ["#FFD500", 0.3],
                ["#FF0000", 0.1],
            ]
            timeDur = this.defaultLongRestDuration;
        }
        this.setState({
            timerMode: mode,
            timeDuration: timeDur,
            colors: [...colors],
            changeCounter: this.state.changeCounter + 1
        }, () => {
            this.props.changeTaskType(mode);
        })
    }

    playTimer = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }

    resetRemainingTime = () => {
        this.setState({
            changeCounter: this.state.changeCounter + 1,
            isPlaying: false
        })
    }

    renderTime = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
        
        return (
            <div className="time-wrapper">
                <p> <strong> REMAINING TIME </strong> </p>
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
                                key={this.state.changeCounter}
                                isPlaying={this.state.isPlaying}
                                duration={this.state.timeDuration}
                                colors={this.state.colors}
                                children={this.renderTime}
                                size={280}
                                strokeWidth={30}
                            >
                            </CountdownCircleTimer>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom" sz="lg" onClick={() => this.changeTimerMode("Work")}>WORK</Button>
                        </Col>
                        <Col>
                            <Button variant="custom" sz="lg" onClick={() => this.changeTimerMode("ShortRest")}>SHORT REST</Button>
                        </Col>
                        <Col>
                            <Button variant="custom" sz="lg" onClick={() => this.changeTimerMode("LongRest")}>LONG REST</Button>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom-long" sz="lg" block onClick={this.playTimer}>
                                {this.state.isPlaying ? 'STOP': 'PLAY'}
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className="timer-button">
                    <Row>
                        <Col>
                            <Button variant="custom-long" sz="lg" block onClick={this.resetRemainingTime}>
                                RESET
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}