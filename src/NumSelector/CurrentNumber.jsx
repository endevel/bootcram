import React, { Component } from 'react'

class CurrentNumber extends Component {
    render() {
        return (
            <div className="current-number">
                {this.props.value}
            </div>
        )
    }
}

export default CurrentNumber;
