import React, { Component } from 'react';
import Tab from './tab'

export default class Tabs extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <Tab customerName='Ace Ventura' />
                            <Tab customerName='Bob Dole' />
                            <Tab customerName='Leeroy Jenkins' />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
