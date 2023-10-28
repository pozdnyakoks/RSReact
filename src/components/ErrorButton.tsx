import React from 'react';

export default class ErrorButton extends React.Component<{
  onClick: () => void;
}> {
  render() {
    return (
      <button className="error-btn" onClick={this.props.onClick}>
        Make an Error
      </button>
    );
  }
}
