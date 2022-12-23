import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler } = this.props;
//     return (
//       <div className="search-box">
//         <input
//           type="search"
//           placeholder="search monsters"
//           onChange={onChangeHandler}
//         />
//       </div>
//     );
//   }
// }

// class CardList extends Component {
//   render() {
//     const {monsters} = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { id, name, email } = monster;
//           return (
//             <div key={id} className="card-container">
//               <img src={`https://robohash.org/${id}?set=set2`} />
//               <h2>{name}</h2>
//               <p>{email}</p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onChangeHandler = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onChangeHandler } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().startsWith(searchField);
    });
    return (
      <div className="App">
        <h1 className="App-title">MONSTERS ROLODESK</h1>
        <SearchBox onSearchChange={onChangeHandler}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
