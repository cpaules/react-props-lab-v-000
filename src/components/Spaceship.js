// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    );
  }
 };

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};
