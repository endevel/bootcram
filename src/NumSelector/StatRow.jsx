import React, { Component } from 'react'

import TimerOff from './TimerOff'
import ResultSet from './ResultSet';


class StatRow extends Component {
    render() {
        return (
            <div className = "stat-row">
                <div>
                    <TimerOff />
                </div> 
                <div className = "result-set">
                    <ResultSet />
                </div>
            </div>
        )
    }
}

export default StatRow;