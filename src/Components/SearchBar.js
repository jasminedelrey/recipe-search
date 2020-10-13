import React, { Component } from 'react';
import './Food.css';

const options = ['Low Carb', 'Low Fat', 'Medium Carb', 'Balanced', 'Vegetarian'];
class SearchBar extends Component {
    constructor() {
       super();
       this.textRef = React.createRef();
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
  handleChange() {
    let ref = this.textRef;
    this.props.getResultDictionary(ref.current.value, "searchBar");
  }

  
    render() {
      return (
        <div className= "searchFood">
        <input ref = {this.textRef} type= "text" className = "searchBar" placeHolder= "Search for a recipe"/>
        <button onClick = {this.handleChange}/>
        </div>
      );
    }
  
  }

  export default SearchBar;