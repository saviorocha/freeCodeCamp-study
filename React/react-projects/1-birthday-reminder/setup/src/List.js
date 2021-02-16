import React from 'react';

const List = ({ people }) => {
  console.log(people);
  return (
    <>
      {
        people.map((person) => {
          const { id, image, age, name } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt="" />
              <div>
                <h4>{name}</h4>
                <p>{age} anos</p>
              </div>
            </article>
          );
        })
      }
    </>
  );
};

export default List;
