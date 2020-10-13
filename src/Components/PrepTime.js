import React, { Component } from 'react';
import './Food.css';

const options = ['Low Carb', 'Low Fat', 'Medium Carb', 'Balanced', 'Vegetarian'];
class PrepTime extends Component {
    constructor() {
       super();
       this.state={
         showFood: false,
         selectValue: 'default'
       }
       this.handleChange = this.handleChange.bind(this);
     }
  
//     _matchResults(diet_query) { //create array of matched products for EACH SEARCH CRITERIA
//       // const dietJson = foods.dietLabel;
//       diet_query = this.props.dietQuery;
//       console.log("this is diet query from child component: "+ diet_query);
//       if(diet_query === this.props.dietLabel) {
//         this.setState({
//           searchList: this.state.searchList.push(this.props.image),
//           showFood: !this.state.showFood
          
//       })
  
//       console.log(this.state.showFood);
//       }
  
  
//       // foods.forEach(function(item, index) {
  
//       // Object.entries(foods).map(([json_key, json_value])=> { h
//   }
  handleChange(e) {
    if(this.props.clicked) {
        this.props.getResultDictionary(e.target.value, "prepTime");
  }
  }

  
    render() {
      return (
        <div className = "prepTime" id= "criteria">
        <select defaultValue = {this.state.selectValue} onChange = {this.handleChange} name= "prepTime" id = "prep-time" className= "dropdown">
      <option value="">--Please choose a prep time--</option>
        <option value= 'low'> 15-35min </option> 
        <option value= 'medium'> 40min-1hr </option> 
        <option value= 'high'> 1hr+ </option> 
      </select>
        </div>   
      );
    }
  
  }

  export default PrepTime;