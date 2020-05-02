import React from "react";
import { CardList } from "./component/cardList/cardList";
import "./App.css";
import { SearchBox } from "./component/search-box/search-box";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(users => this.setState({ monsters: users }));
    // .then(users=>console.log(users))
  }
  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value });
  };

  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>MOnster Hub</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
