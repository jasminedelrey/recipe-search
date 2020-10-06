import React, { Component } from 'react';
import './Food.css';

class Food extends Component {
    constructor() {
        super();
        this.state={
            showFood: false,
        }
        this._handleClick = this._handleClick.bind(this);
        
    }

    _handleClick() {
        if(!this.state.showFood) {
            this.props.foodClicked(!this.state.showFood);
            this.setState((previousState)=> {
                return {
                    showFood: !previousState.showFood
                }
            })
        }
    }

    render() {
        return(
            <div className= "food">
                <img src = {this.state.showFood ? this.props.food.title : this.props.food.image}
                alt = ""
                onClick = {this._handleClick} />
            </div>
        );
    }
}

export default Food;