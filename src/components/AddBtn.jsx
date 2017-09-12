import React, { Component } from 'react';

export class AddButton extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind( this );
  }

  submitForm() {
    let recipeName = document.querySelector(' #recipeName' ).value;
    let ingredients = document.querySelector( '#ingredients' ).value;

    let recipeObject = {
      name: recipeName,
      ingredients: ingredients.split( "," )
    };

    if( typeof( Storage ) !== "undefined" ) {
      if ( recipeName.length > 0 && ingredients.length > 0) {
        localStorage.setItem( recipeObject.name, JSON.stringify( recipeObject.ingredients ) );
      }
    }
  }

  render() {
      return (
        <button className="add-button" onClick={this.submitForm}>Add Recipe</button>
      );
  }
}
