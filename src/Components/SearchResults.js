
import React, { Component } from 'react';
import './Food.css';
import foodJson from '/Users/jasminedelreyes/Desktop/firstreact/comp355-hw3/src/Assets/data/recipe.json'
import PopUp from './PopUp'

const foods = foodJson.recipes;
class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            seen : false
        };
        this.clickPopUp = this.clickPopUp.bind(this);
    }

    clickPopUp() {
        this.props.clickPopUpState();

    }


    render() {
    
    let results = this.props.searchList;
    let resultEntries = [];

        for(let i=0; i< results.length; i++) {
            resultEntries.push(
                <div className= "individual-search-results">
                <div className = "button" onClick = {this.clickPopUp}> 
                    <img src= {results[i].image} alt= "searchResult"/>
                    </div>
                    <h3> {results[i].title}</h3>
                    <p>Servings: {results[i].servings} servings </p>
                    <p>Prep Time: {results[i].prepTime} minutes</p>
                    <p>Calories: {results[i].calories} calories </p>
                    <p>Diet: {results[i].dietLabel}</p>
                    <p>Recipe Category: {results[i].recipeCategory}</p>
                </div>
            )
        }
    return (
        <div className= "search-results">
        {resultEntries}
      </div>
    );
    }
}

  export default SearchResults;