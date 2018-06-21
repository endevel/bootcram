import React, { Component } from 'react'

import TimerOff from './TimerOff'

class StatRow extends Component {
    render() {
        return (
            <div className = "stat-row">
                <div>
                    <TimerOff />
                </div> 
            </div>
        )
    }
}

export default StatRow;