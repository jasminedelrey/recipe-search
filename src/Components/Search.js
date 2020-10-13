import React, { Component } from 'react';
import './Food.css';

class Search extends Component {
    constructor() {
        super();
        this.state={
            showFood: false,
        }
        this._handleClick = this._handleClick.bind(this);
        
    }

    // _handleResults() {
    //     Object.entries(this.props.food).map(([dietLabel]) => {
    //         console.log(dietLabel)
    //         if (this.props.query === dietLabel){
    //             this.setState((previousState) => {
    //                 return {
    //                     showFood: !previousState.showFood
    //                 }
    //             })
    //         }
    //     })
    // }

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
                <button className = "search-food"
                        onClick = {this._handleClick}> {this.props.food.image}</button>
            </div>
        );
    }
}

export default Search;