import React, { Component } from 'react'
import Card from './Card';

class WorkPage extends Component {

    renderCard(cardValue, rightValue, onSelectAnswer, id) {
        return (
            <Card
                key = {id}
                id = {id}
                value = {cardValue}
                rightValue = {rightValue}
                onSelectAnswer = {onSelectAnswer}
            />
        )
    }

    render() {
        const cards = [];
        for (let i = 0; i < this.props.values.length; i++) {

            cards.push(this.renderCard(this.props.values[i], 
                       this.props.rightValue,
                       this.props.onSelectAnswer, 
                       i)
            );
        }
        return (            
            <div className="work-page">
                {cards}
            </div>
        )
    }
}

export default WorkPage;
