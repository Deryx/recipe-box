import React, { Component } from 'react';

export interface RecipeProps { recipeName: any }

export class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.deleteRecipe = this.deleteRecipe.bind( this );
  }

  deleteRecipe(){
    if( typeof( Storage ) !== "undefined" ) {
      let recipeName = this.props.recipeName;
      if( localStorage[recipeName] !== null && localStorage[recipeName] !== undefined ) {
        localStorage.removeItem(recipeName);
      }
    }
  }

  render() {
      return (
        <button className="delete-button" onClick={this.deleteRecipe}>Delete</button>
      );
  }
}
