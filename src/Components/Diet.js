import React, { Component } from 'react';
import './Food.css';

const options = ['Low Carb', 'Low Fat', 'Medium Carb', 'Balanced', 'Vegetarian'];
class Diet extends Component {
    constructor() {
       super();
       this.state={
         showFood: false,
         selectValue: 'default'
       }
       this.handleChange = this.handleChange.bind(this);
     }

  handleChange(event) {
    // if(this.props.clicked) 
        console.log("clicked is true in DIet")
        this.props.getResultDictionary(event.target.value, "diet");
  }

  
    render() {
      return (
        <div className = "diet" id= "criteria">
        <select defaultValue = {this.state.selectValue}
         onChange = {this.handleChange}
         name="diets" id="diet-select" className= "dropdown">
            <option value="">--Choose A Diet--</option>
            <option value="Low-Sodium">Low Sodium</option>
            <option value="Low-Carb">Low Carb</option>
            <option value="Low-Fat">Low Fat</option>
            <option value="Medium-Carb">Medium Carb</option>
            <option value="Balanced">Balanced</option>
            <option value="Vegetarian">Vegetarian</option>
        </select>
        </div>   
      );
    }
  
  }

  export default Diet;