import React, { Component } from 'react';

export default class Tab extends Component {

    render() {
        return(
            <div>
                {this.props.customerName}
                <ul>
                    <li>Premium 3</li>
                    <li>Well 2</li>
                    <li>Beer 5</li>
                </ul>
            </div>
        )
    }
}