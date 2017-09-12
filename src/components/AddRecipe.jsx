import React, { Component } from 'react';
import { AddButton } from './AddBtn'
import { CloseButton } from './CloseButton';

export class AddRecipe extends Component {
  render() {
      return (
        <div className="recipe-form">
          <header>
            <h3>Add a Recipe</h3>
            <div>x</div>
          </header>
          <form>
            <dl>
              <dt>
                <label>Recipe</label>
              </dt>
              <dd>
                <input type="text" id="recipeName" placeholder="Recipe Name" />
              </dd>
            </dl>

            <dl>
              <dt>
                <label>Ingredients</label>
              </dt>
              <dd>
                <textarea id="ingredients" cols="72" rows="2" placeholder="Enter ingredients, separated by commas" />
              </dd>
            </dl>
          </form>
          <div>
            <AddButton />
            <CloseButton />
          </div>
        </div>
      );
  }
}
