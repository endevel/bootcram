import React, { Component } from 'react'


class Caption extends Component {
    render() {
        return (
            <div className = "caption">
                <div>
                    {this.props.text}
                </div>
                <hr />
            </div>
        )
    }
}

export default Caption;
