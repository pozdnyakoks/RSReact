import React from 'react';

export default class ErrorButton extends React.Component<{
  onClick: () => void;
}> {
  render() {
    return <button onClick={this.props.onClick}>Make an Error</button>;
  }
}
