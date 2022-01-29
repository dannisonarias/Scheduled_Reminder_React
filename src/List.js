import React from "react";

const List = ({ people, setPeople }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, time, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{time} pm </p>
              <button
                onClick={() =>
                  setPeople(
                    people.filter((i) => {
                      return i.id !== id;
                    })
                  )
                }
              >
                Completed
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
