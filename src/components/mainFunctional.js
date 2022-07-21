import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import cats from '../APIs/cats';
import covid from '../APIs/covid';

function MainFunctional() {
  const [data, setSWData] = useState([]);
  const [covData, setCovData] = useState([])
  const [catData, setCatData] = useState([])

  useEffect(() => {
    covid.getCurrentCovidStats().then((response) => {
      console.log("covid", response);
      setCovData(response);
    });
  }, []);

  useEffect(() => {
    starwars.getPeople().then((response) => {
      console.log("star wars", response);
      setSWData(response);
    });
    starwars.getPlanets().then((response) => {
      console.log("star wars pl", response);
      // setSWData(response);
    });
    starwars.getStarships().then((response) => {
      console.log("star wars ships", response);
      // setSWData(response);
    });
  }, []);

  useEffect(() => {
    cats.get100Cats().then((response) => {
      console.log("cats", response);
      setCatData(response);
    });
  }, []);

  return (
    <div className="App">
      {data.map((item, index) => {
        return <div key={index}>name: {item.name}</div>;
      })}
    </div>
  );
}

export default MainFunctional;
