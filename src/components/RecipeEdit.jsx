import React, { Component } from 'react';
import { Overlay } from './Overlay';
import { EditRecipe } from './EditRecipe'

export class RecipeEdit extends Component {
  render() {
    return (
      <div className="add-recipe">
        <Overlay />
        <EditRecipe />
      </div>
    );
  }
}
