import React, { Component } from 'react';
import { EditButton } from './EditButton';
import { CloseButton } from './CloseButton';
import { Recipes } from './Recipes';

export interface RecipeProps { recipeName: string }

export class EditRecipe extends Component<RecipeProps, undefined> {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      ingredients: []
    }
    this.submitForm = this.submitForm.bind( this );
  }

  componentWillMount() {
    console.log( this.state.recipeName );
    if(this.props.recipeName !== "") {
      if( typeof( Storage ) !== "undefined" ) {
        let recipe = this.props.recipeName;
        let ingredients = JSON.parse( localStorage.getItem(recipe) );
        this.setState({
          recipeName: recipe,
          ingredients: ingredients
        }, function() {
          return this.state.recipeName;
        });
      }
    }
    console.log(this.state.recipeName);
  }

  submitForm() {
    let recipeName = document.querySelector(' #recipeName' ).value;
    let ingredients = document.querySelector( '#ingredients' ).value;

    let recipeObject = {
      name: recipeName,
      ingredients: ingredients.split( "," )
    };

    if( typeof( Storage ) !== "undefined" ) {
      let savedRecipes = localStorage.getItem( 'recipes' );
      let recipeArray = JSON.parse(savedRecipes) || [];

      if ( recipeName.length > 0 && ingredients.length > 0) {
        recipeArray.push( recipeObject );
        localStorage.setItem( 'recipes', JSON.stringify( recipeArray ) );
      }
    }
  }

  render() {
      return (
        <div className="recipe-form">
          <header>
            <h3>Edit Recipe</h3>
            <div>x</div>
          </header>
          <form>
            <dl>
              <dt>
                <label>Recipe</label>
              </dt>
              <dd>
                <input type="text" id="recipeName" value={ this.props.recipeName } placeholder="Recipe Name" />
              </dd>
            </dl>

            <dl>
              <dt>
                <label>Ingredients</label>
              </dt>
              <dd>
                <textarea id="ingredients" value={ this.props.ingredients } cols="72" rows="2" placeholder="Enter ingredients, separated by commas" />
              </dd>
            </dl>
          </form>
          <div>
            <EditButton />
            <CloseButton />
          </div>
        </div>
      );
  }
}
