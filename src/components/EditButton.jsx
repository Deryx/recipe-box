import React, { Component } from 'react';
import { RecipeEdit } from './RecipeEdit';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export class EditButton extends Component {
  constructor(props) {
    super(props);
    this.state = { editVisible: false };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ editVisible: !this.state.editVisible }, function() {
      return this.state.editVisible;
    });
  }

  render() {
      return (
        <span>
          <button className="edit-button" onClick={this.handleClick}>Edit</button>
          <CSSTransitionGroup
              transitionName="recipe-edit"
              transitionAppear={false}
              transitionEnterTimeout={700}
              transitionLeave={false}
          >
            { this.state.editVisible ? <RecipeEdit /> : null }
          </CSSTransitionGroup>
        </span>
      );
  }
}
