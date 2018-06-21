import React, { Component } from 'react'
import Header from './Header';
import WorkPage from './WorkPage';

import Round from './Round';

import './index.css';

let round = new Round();

class Border extends Component {

    state = {
        items: round.createItems(),
        currentIndex: round.currentIndex
    }

    onSelectAnswer = (cardId) => {
        console.log('selected ' + cardId);
        console.log('current index ' + this.state.currentIndex);

        if (cardId === this.state.currentIndex) {
            console.log(`.. and that's right !!!`);    
            this.setState({
                items: round.createItems(),
                currentIndex: round.currentIndex        
            });
        }
    }

    render() {    
        const ndx = this.state.currentIndex;

        return (
            <div>
                <div className="border">
                    <Header value = {this.state.items[ndx]}/>    
                    <WorkPage 
                        values = {this.state.items} 
                        rightValue = {this.state.items[ndx]}
                        onSelectAnswer = {this.onSelectAnswer}
                    />            
                </div>
            </div>            
        )
    }
}

export default Border;
