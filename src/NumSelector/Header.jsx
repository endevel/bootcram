import React, { Component } from 'react'
import CurrentNumber from './CurrentNumber';

import Caption from './Caption';
import StatRow from './StatRow';


class Header extends Component {
    render() {
        return (
            <div className = "header-title">
                <div className="header">
                    <Caption text="Найди число на карточках: "/>
                    <CurrentNumber value={this.props.value}/>
                </div>
                <StatRow />
            </div>
        )
    }
}

export default Header;
