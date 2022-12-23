import logo from "./logo.svg";
import "./App.css";
import { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  
  const [monsters,setMonsters] = useState([])
  const [searchField,setSearchField] = useState('')
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => (
      setMonsters(users)
    ))
  }, [])

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().startsWith(searchField);
    })
    setFilteredMonsters(filteredMonsters);
  },[monsters,searchField])

  const onChangeHandler = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
        <h1 className="App-title">MONSTERS ROLODESK</h1>
        <SearchBox onSearchChange={onChangeHandler}/>
        <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;