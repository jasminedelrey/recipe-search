import React, { Component } from 'react';
import './Food.css';

const options = ['Low Carb', 'Low Fat', 'Medium Carb', 'Balanced', 'Vegetarian'];
class RecipeCategory extends Component {
    constructor() {
       super();
       this.state={
         showFood: false,
         selectValue: 'default'
       }
       this.handleChange = this.handleChange.bind(this);
     }

  handleChange(e) {
    if(this.props.clicked) {
        this.props.getResultDictionary(e.target.value, "recipeCategory");
  }
  }

  
    render() {
      return (
        <div className = "recipeCategory" id= "criteria">
       <select defaultValue = {this.state.selectValue} onChange = {this.handleChange} name= "recipeCategory" id="recipe-category" className= "dropdown">
      <option value="">--Please choose a recipe category--</option>
        <option value= "Appetizer"> Appetizer </option> 
        <option value= "Entree"> Entree </option> 
        <option value= "Dessert"> Dessert </option> 
        </select>
        </div>   
      );
    }
  
  }

  export default RecipeCategory;