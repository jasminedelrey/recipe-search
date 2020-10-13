import React, { Component } from 'react';
import './Food.css';


class PopUp extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.props.clickPopUpState();
    };


    render() {
        return (
            <div className="modal" id="popup-box">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <p>I'm A Pop Up!!!</p>
                </div>
            </div>
        )
    }
}


export default PopUp;