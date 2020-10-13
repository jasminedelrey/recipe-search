import React, { Component } from 'react';
// import './App.css';
import './Components/Food.css'
import foodJson from './Assets/data/recipe.json'
import 'bootswatch/dist/litera/bootstrap.min.css';
import Diet from "./Components/Diet"
import Calorie from "./Components/Calorie"
import PrepTime from "./Components/PrepTime"
import RecipeCategory from "./Components/RecipeCategory"
import SearchResults from "./Components/SearchResults"
import Logo from "./Assets/images/mainLogo.png"
import PopUp from "./Components/PopUp"
// import SearchBar from "./Components/SearchBar"


//make sure no double results happen
//pass unique identifier

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
const searchMap = new Map();
let searchResult, dietLabel, list, recipeCategory, prepTime, calorie;


class App extends Component {
  constructor() {
    super();
    this.dietRef = React.createRef();
    this.textRef = React.createRef();
    this.calorieRef = React.createRef();
    this.prepTimeRef = React.createRef();
    this.recipeCategoryRef = React.createRef();
    this.textRef = React.createRef();

    this.state = {
      query: [],
      dietQuery: "",
      searchList: [],
      testList: [],
      searchBarList: [],
      dietResultList: [],
      recipeResultList: [],
      calorieResultList: [],
      prepTimeResultList: [],
      resultCount: 0,
      zeroResult: false,
      buttonClicked: false,
      resultDictionary: [],
      seen: false,
      optionList: ['Low Carb', 'Low Fat', 'Medium Carb', 'Balanced', 'Vegetarian']
    }

    this.clicked = this.clicked.bind(this);
    this.clickPopUpState = this.clickPopUpState.bind(this);
    this.getResultDictionary = this.getResultDictionary.bind(this);
  }


  getResultDictionary(e, string) {
    let sList = [];
    let dList = [];
    let rList = [];
    let cList = [];
    let pList = [];
    if (string === "searchBar") {
      let search_value = e;
      sList.push(search_value)
    }
    if (string === "diet") {
      let diet_value = e;
      dList.push(diet_value);
    }
    if (string === "recipeCategory") {
      let recipe_value = e;
      rList.push(recipe_value);

    }
    if (string === "calorie") {
      let calorie_value = e;
      cList.push(calorie_value);

    }
    if (string === "prepTime") {
      let prepTime_value = e;
      pList.push(prepTime_value);
    }
    console.log("BEFORE SETTING STATE" + this.state.dietResultList.length)

    this.setState({
      searchBarList: [...this.state.searchBarList, ...sList],
      prepTimeResultList: [...this.state.prepTimeResultList, ...pList],
      dietResultList: [...this.state.dietResultList, ...dList],
      calorieResultList: [...this.state.calorieResultList, ...cList],
      recipeResultList: [...this.state.recipeResultList, ...rList],

    });

    console.log("I AM IN GETRESULTDICTIONARY")
    console.log(this.state.dietResultList.length)

  }

  countResults(showDietQuery) {
    if (showDietQuery) {
      this.setState({
        resultCount: this.state.resultCount + 1
      })
    }
  }


  clicked() {
    let foodList = [];
    let count = 0;
    let searchBarResult = this.textRef.current.value;
    console.log("searched" + searchBarResult)
    console.log("IN CLICKED" + this.state.dietResultList[0])
    console.log("s" + this.state.searchBarList)
    console.log("r" + this.state.recipeResultList[0])
    console.log(" c" + this.state.calorieResultList)
    console.log(" p" + this.state.prepTimeResultList)
    foods.map(food => {
      if (
        (food.title.toLowerCase().includes(searchBarResult.toLowerCase())) &&

        (this.state.dietResultList[0] === food.dietLabel || this.state.dietResultList[0] === undefined) &&

        (this.state.recipeResultList[0] === food.recipeCategory || this.state.recipeResultList[0] === undefined) &&

        (
          (
            (this.state.calorieResultList[0] === "low" && food.calories < 500) ||
            (this.state.calorieResultList[0] === "med" && (food.calories >= 500 && food.calories < 900)) ||
            (this.state.calorieResultList[0] === "high" && food.calories >= 900)

          ) || this.state.calorieResultList[0] === undefined) &&



        (
          (
            (this.state.prepTimeResultList[0] === "low" && food.prepTime < 35) ||
            (this.state.prepTimeResultList[0] === "med" && (food.prepTime >= 35 && food.prepTime < 60)) ||
            (this.state.prepTimeResultList[0] === "high" && food.prepTime > 60)) || this.state.prepTimeResultList[0] === undefined)

      ) {
        console.log("LOGIC IS TRUE")
        foodList.push(food);
        count = count + 1;
      }

    });
    this.setState({
      searchList: [...this.state.searchList, ...foodList],
      buttonClicked: !this.state.buttonClicked,
      resultCount: count
    })
  }


  componentDidUpdate() {
    console.log("IN COMPONENT DID UPDATE")
    for (let x = 0; x < this.state.searchList.length; x++) {
      console.log(this.state.searchList[x])
    }
  }

  clickPopUpState = () => {
    console.log("CURRENTLY IN clickPopUpState!!!")
    console.log("this.state.seen = " + this.state.seen)
    this.setState({
      seen: !this.state.seen
    });
  }



  render() {
    const foodJson = foods;
    const foodProperties = this.state.searchList;
    let buttonClicked = this.state.buttonClicked;
    let results;
    let popUp;

    if (buttonClicked) {
      results = <SearchResults key="search results"
        searchList={this.state.searchList}
        clicked={buttonClicked}
        foods={foodJson}
        testList={this.state.testList}
        searchList={this.state.searchList}
        outputDietMatch={this.outputDietMatch}
        searchBarList={this.state.searchBarList}
        calorieResultList={this.state.calorieResultList}
        prepTimeResultList={this.state.prepTimeResultList}
        dietResultList={this.state.dietResultList}
        clickPopUpState={this.clickPopUpState}
        recipeResultList={this.state.recipeResultList}
        resultDictionary={this.state.resultDictionary}


      />
      console.log("this is search list in app" + this.state.searchList);
      console.log(this.state)
    }

    return (
      <div className="App">

        <div>
          <img id="mainLogo" src={Logo} alt="mainLogo" />
          <br></br>
          <div id="search-box">
            <input ref={this.textRef} type="text" className="searchBar" placeHolder="Search for a recipe" />
          </div>
          {this.state.seen ? <PopUp key="pop up window"
            clickPopUpState={this.clickPopUpState}
          /> : null}
          <br></br>
          <div className="advanced-search">
            <br></br>
            <p id="advanced"> Advanced Search Filters: </p>
            <Diet key={foods.title}
              query={this._getResults}
              options={this.state.optionList}
              foods={foodJson}
              food_diets={foods.dietLabel}
              searchList={this.matchResults}
              dietQuery={this.getDietQuery}
              showResults={this.showResults}
              clicked={this.state.buttonClicked}
              getResultDictionary={this.getResultDictionary}
              foodShown={(showFood) => this.countResults(showFood)}
              buttonClicked={(showDietQuery) => this.countResults(showDietQuery)}
            />

            <Calorie key={foods.title}
              query={this._getResults}
              options={this.state.optionList}
              foods={foodJson}
              searchList={this.matchResults}
              dietQuery={this.getDietQuery}
              showResults={this.showResults}
              getResultDictionary={this.getResultDictionary}
              clicked={this.clicked}
              foodShown={(showFood) => this.countResults(showFood)}
              buttonClicked={(showDietQuery) => this.countResults(showDietQuery)}
            />

            <PrepTime key={foods.title}
              query={this._getResults}
              options={this.state.optionList}
              foods={foodJson}
              searchList={this.matchResults}
              dietQuery={this.getDietQuery}
              showResults={this.showResults}
              getResultDictionary={this.getResultDictionary}
              clicked={this.clicked}
              foodShown={(showFood) => this.countResults(showFood)}
              buttonClicked={(showDietQuery) => this.countResults(showDietQuery)}
            />

            <RecipeCategory key={foods.title}
              query={this._getResults}
              options={this.state.optionList}
              foods={foodJson}
              searchList={this.matchResults}
              dietQuery={this.getDietQuery}
              showResults={this.showResults}
              getResultDictionary={this.getResultDictionary}
              clicked={this.clicked}
              foodShown={(showFood) => this.countResults(showFood)}
              buttonClicked={(showDietQuery) => this.countResults(showDietQuery)}
            />

            <div id="search-button">
              <button id="big-search" class="btn btn-primary"
                onClick={this.clicked}> Search</button> </div>

            <h3 id="resultCount">{this.state.buttonClicked ? "You have " + this.state.resultCount + " results. Refresh the page for a new search." : ""}</h3>
            <h4 id="ifZeroResults"> {this.state.buttonClicked && this.state.resultCount === 0 ? "Please try a different search query." : ""}</h4>

            <div id="all-results">{results} </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
