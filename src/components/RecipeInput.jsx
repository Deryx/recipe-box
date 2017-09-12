import React, { Component } from 'react';
import { Overlay } from './Overlay';
import { AddRecipe } from './AddRecipe'

export class RecipeInput extends Component {
  render() {
    return (
      <div className="add-recipe">
        <Overlay />
        <AddRecipe />
      </div>
    );
  }
}
