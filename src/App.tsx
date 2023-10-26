import React from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount(): void {
    this.getData();
  }

  getData = () => {
    fetch(`https://swapi.dev/api/people/`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  };

  render() {
    console.log(this.state.data);

    return (
      <div>
        <Search />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
