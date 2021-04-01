import { useEffect, useState } from "react";
import Character from "./Character";
import GenderSelectForm from "./GenderSelectForm";

const App = () => {
  const [charData, setCharData] = useState([]);
  const [genderFilter, setGenderFilter] = useState("all");

  const getData = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setCharData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  if (charData.length !== 0) {
    let charDataDisplay =
      genderFilter === "all"
        ? charData.map((char) => (
            <Character
              key={char.id}
              name={char.name}
              gender={char.gender}
              age={char.age}
              eyeColor={char.eye_color}
              hairColor={char.hair_color}
            />
          ))
        : charData
            .filter((char) => {
              return char.gender === genderFilter;
            })
            .map((char) => (
              <Character
                key={char.id}
                name={char.name}
                gender={char.gender}
                age={char.age}
                eyeColor={char.eye_color}
                hairColor={char.hair_color}
              />
            ));
    console.log(genderFilter, charDataDisplay);
    return (
      <div className="container-outer">
        <GenderSelectForm
          genderFilter={genderFilter}
          setGenderFilter={(gender) => {
            setGenderFilter(gender);
          }}
        />
        {charDataDisplay}
      </div>
    );
  } else {
    return null;
  }
};

export default App;
