import React from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';
import { TState } from './utils/types';

class App extends React.Component {
  state: TState = {
    data: null,
    value: '',
    isError: false,
    isLoading: false,
  };

  componentDidMount(): void {
    const lsValue: string | null = localStorage.getItem('searchItem');
    if (lsValue !== null) {
      this.setState({ value: lsValue });
      this.getData(lsValue);
    } else {
      this.getData(this.state.value);
    }
  }

  changeState = (newValue: string): void => {
    this.setState({
      value: newValue,
    });
  };

  errorMaker = (): void => {
    try {
      throw new Error('oops');
    } catch (error) {
      this.setState({ isError: true });
    }
  };

  getData = (value: string): void => {
    this.setState({ isLoading: true });
    const url: string =
      value === ''
        ? 'https://swapi.dev/api/people/'
        : `https://swapi.dev/api/people/?search=${value}`;
    fetch(url)
      .then((res) => {
        if (res.status === 404) this.setState({ isError: true });
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data.results });
        this.setState({ isLoading: false });
      });
  };

  render(): JSX.Element {
    return (
      <div className="container">
        <Search
          value={this.state.value}
          setState={(val) => this.changeState(val)}
          getData={() => this.getData(this.state.value)}
        />
        <ErrorBoundary>
          <ErrorButton onClick={this.errorMaker} />
          <List
            data={this.state.data}
            isError={this.state.isError}
            isLoading={this.state.isLoading}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
