import React from "react";

const List = (props) => {
  const people = props.people;
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="person">
            <img src={person.image} alt={person.name + " face"} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
