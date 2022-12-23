import { Component } from "react";
import './card-list.styles.css'

class Card extends Component {
  render() {
    const {monster} = this.props;
    const { id, name, email } = monster;
    return (
      <div key={id} className="card-container">
        <img src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster = {monster}/>
        })}
      </div>
    );
  }
}
