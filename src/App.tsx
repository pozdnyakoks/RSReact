import React from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';

class App extends React.Component {
  state = {
    data: null,
    value: '',
    isError: false,
    isLoading: false,
  };

  componentDidMount(): void {
    const lsValue = localStorage.getItem('searchItem');
    if (lsValue !== null) {
      this.setState({ value: lsValue });
      this.getData(lsValue);
    } else {
      this.getData(this.state.value);
    }
  }

  changeState = (newValue: string) => {
    this.setState({
      value: newValue,
    });
  };

  errorMaker = () => {
    try {
      throw new Error('oops');
    } catch (error) {
      this.setState({ isError: true });
    }
  };

  getData = (value: string) => {
    this.setState({ isLoading: true });
    const url =
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

  render() {
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
