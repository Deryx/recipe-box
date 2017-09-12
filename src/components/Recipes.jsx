import React, { Component } from 'react';
import { Recipe } from './Recipe';

export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentWillMount() {
    if( typeof( Storage ) !== "undefined" ) {
      let storageRecipes = [];
      let storageIngredients;

      for ( let key in localStorage ) {
        storageIngredients = JSON.parse( localStorage[key] );

        let recipe = {
          name: key,
          ingredients: storageIngredients
        }
        storageRecipes.push( recipe );
      }
      this.setState({
        recipes: storageRecipes
      }, function() {
        return this.state.recipes;
      });
    } else {
      return function() {};
    }
  }

  render() {

    console.log( this.state.recipes );

    return (
      <div className="recipes">
        { this.state.recipes.map( recipe => {
            return <Recipe recipeObject={ recipe } />;
          })
        }
      </div>
    );
  }
}
