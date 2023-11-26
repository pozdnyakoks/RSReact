import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log('error boundary catch error');
      return (
        <h1 className="error-title">
          Something went wrong from error boundary. Please reload page
        </h1>
      );
    }

    return this.props.children;
  }
}
