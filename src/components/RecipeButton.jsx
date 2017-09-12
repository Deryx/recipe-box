import React, { Component } from 'react';
import { RecipeInput } from './RecipeInput';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export class RecipeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { inputVisible: false };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ inputVisible: !this.state.inputVisible }, function() {
      return this.state.inputVisible;
    });
  }

  render() {
      return (
        <div>
          <button className="recipe-button" onClick={this.handleClick}>Add Recipe</button>
          <CSSTransitionGroup
              transitionName="recipe-input"
              transitionAppear={false}
              transitionEnterTimeout={700}
              transitionLeave={false}
          >
            { this.state.inputVisible ? <RecipeInput /> : null }
          </CSSTransitionGroup>
        </div>
      );
  }
}
