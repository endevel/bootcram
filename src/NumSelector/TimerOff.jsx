import React, { Component } from 'react'

class TimerOff extends Component {

    constructor (props) {
        super(props);
    }

    state = {
        dd: 0,
        hh: 0,
        mm: 0,
        ss: 0
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    tick() {
        let sec = this.state.ss + 1;
        let min = this.state.mm;

        if (sec >= 60) {
            sec = 0;
            min = min + 1;
        }

        this.setState ({
            ss: sec,
            mm: min
        })
    }

    componentWillUnmount () {
        clearInterval(this.timerId);
    }

    render() {

        let h = this.state.hh < 10 ? '0' + this.state.hh.toString() : this.state.hh.toString();
        let m = this.state.mm < 10 ? '0' + this.state.mm.toString() : this.state.mm.toString();
        let s = this.state.ss < 10 ? '0' + this.state.ss.toString() : this.state.ss.toString();

        return (
            <div className = "timer-off">
                {h} : {m}  :  {s}
            </div>
        )
    }
}

export default TimerOff;

