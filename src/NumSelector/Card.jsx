import React, { Component } from 'react'


class Card extends Component {

    id = this.props.id;

    constructor (props) {
        super(props);
        this.onSelectCard = this.onSelectCard.bind(this);
    }

    render() {
        return (
            <div className="card" onClick = {this.onSelectCard}>
                {this.props.value} 
            </div>
        )
    }

    onSelectCard() {
        this.props.onSelectAnswer(this.props.id);
        console.log('card selected: ' + this.props.value);
    }
}

export default Card;
