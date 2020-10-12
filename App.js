import React, { Component } from 'react';
import './App.css';
import foodJson from './Assets/data/recipe.json'
import Food from './Components/Food'


/**
 * first step:
 * App component should have a bunch of food components
 * After reading in the data from json
 * for each JSON object
 * create food component with data
 * 
 * second step:
 * check if text input matches JSON of product
 * 
 * third step:
 *  show results
 */

 const foods = foodJson.recipes;

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodCount: 0
    }
  }

  _countClicks(showFood) {
    if(showFood) {
      this.setState( {
        fooddCount : this.state.foodCount + 1
      })
    }
    else {
      this.setState((previousState) => {
        return {
          foodCount : previousState.foodCount -1
        }
      })
    }
  }
  render() {
    const foodComponent = foods.map(food => {
      return <Food key = {food.image}
                    food = {food} 
                    foodClicked = {(showFood) => this._countClicks(showFood)}
                    />
                    
    })
  
  return (
    <div className="App">
    
      <div>
        <h1> {this.state.foodCount === foods.length ? "Hello" : "Bye"}</h1>
        <div className= "searchFood">
        <input type= "text" className = "searchBar" placeHolder= "Search for a recipe"/>
      </div>
        {foodComponent}
      </div>
    </div>
  );
  }
}


export default App;

                                        /*                                
if(
        (((cprops[0] < 500) && (cprops[1] == ('low'))) ||
        ((cprops[0] >= 500 && cprops[0] < 900) && (cprops[1] == ('med'))) ||
        ((cprops[0] >= 900) && (cprops[1] == ('high'))) ||
        (cprops[0] == cprops[1])) &&
          
        (((pprops[0] < 35) && (pprops[1] == ('low'))) ||
        ((pprops[0] >= 35 && pprops[0] < 60) && (pprops[1] == ('med'))) ||
        ((pprops[0] > 60) && (pprops[1] == ('high'))) ||
        (pprops[0] == pprops[1]))) {
     
     //cprops[0] is the actual data value, and cprops[1] is the filter chosen by the user.  Same 
     
     */
