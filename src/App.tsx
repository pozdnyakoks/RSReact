import React from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';

class App extends React.Component {
  state = {
    data: [],
    value: '',
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

  changeState(newValue: string) {
    this.setState({
      value: newValue,
    });
  }

  getData = (value: string) => {
    const url =
      value === ''
        ? 'https://swapi.dev/api/people/'
        : `https://swapi.dev/api/people/?search=${value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  };

  render() {
    return (
      <div>
        <Search
          value={this.state.value}
          setState={(val) => this.changeState(val)}
          getData={() => this.getData(this.state.value)}
        />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
