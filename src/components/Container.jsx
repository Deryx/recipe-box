import React, { Component } from 'react';
import { Recipes } from './Recipes';
import { RecipeButton } from './RecipeButton';

export class Container extends Component {
  render() {
     return (
        <div className="container">
          <h1>Recipe Box</h1>
          <Recipes />
          <RecipeButton />
        </div>
      );
  }
}
