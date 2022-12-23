import { Component } from "react";
import "./card-list.styles.css";

const Card = ({monster}) => {
  const {id,name,email} = monster;
  return (
    <div key={id} className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;

