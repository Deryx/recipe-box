import React, { Component } from 'react';
import { DeleteButton } from './DeleteButton';
import { EditButton } from './EditButton';

export interface RecipeProps { recipeObject: any }

export class Recipe extends Component<RecipeProps, undefined> {
  render () {
    return (
      <div className="recipe">
        <ul>
          <li>
            <label>{ this.props.recipeObject.name }</label>
            <ul>
              <div className="ingredients">
                <h4>Ingredients</h4>
                <hr />
                { this.props.recipeObject.ingredients.map( ingredient => {
                  return <li>{ ingredient }</li>;
                  })
                }
              </div>
              <div className="buttons">
                <DeleteButton recipeName={ this.props.recipeObject.name } />
                <EditButton />
              </div>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
