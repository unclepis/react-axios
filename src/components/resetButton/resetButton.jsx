import React, { Component } from 'react';
import './resetButton.css';

export default class ResetButton extends Component {
    resetFilter() {
        if (this.props.getFilterData) {
            this.props.getFilterData({
                highPrice: Infinity,
                lowPrice: 0,
                time: 'all'
            });
        }
    }

    render() {
        const labelStyle = {
            display: 'flex',
            justifyContent: 'space-around'
        };
        return (
            <div>
                <div style={labelStyle}>
                    <label>Filters</label><label className="resetButton" onClick={this.resetFilter.bind(this)}>reset</label>
                </div>
                <hr style={{ width: '80%', margin: '0 auto' }} />
            </div>
        );
    }
}
