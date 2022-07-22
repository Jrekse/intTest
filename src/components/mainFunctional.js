import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import cats from '../APIs/cats';
// import covid from '../APIs/covid';
import random from '../APIs/random'

import Search from "./Search";

import '../Assets/style.css'

function MainFunctional() {
   const [shipData, setShipData] = useState([]); const [planetData, setPlanetData] = useState([]);
  // const [covData, setCovData] = useState([])
  const [catData, setCatData] = useState([])
  const [userData, setUserData] = useState([])

  // useEffect(() => {
  //   covid.getCurrentCovidStats().then((response) => {
  //     console.log("covid", response);
  //     setCovData(response);
  //   });
  // }, []);

  useEffect(() => {
    starwars.getPlanets().then((response) => {
      console.log("star wars pl", response);
      setPlanetData(response);
    });
    starwars.getStarships().then((response) => {
      console.log("star wars ships", response);
      setShipData(response);
    });
  }, []);

  useEffect(() => {
    cats.get100Cats().then((response) => {
      console.log("cats", response);
      setCatData(response);
    });
  }, []);

  useEffect(() => {
    random.getUsers().then((response) => {
      console.log("users", response);
      setUserData(response);
    });
  }, []);

  return (
    <div className="App">
      <Search/>
      {shipData.map((ship, index) => {
        return <div key={index}>Ship: {ship.name}</div>
      })}
      {planetData.map((planet, index) => {
        return <div key={index}>Planet: {planet.name}</div>
      })}
      {catData.map((cat, index) => {
        return <img className='catImgs' src={cat.url} alt='cat' key={index}/>
      })}
    </div>
  );
}

export default MainFunctional;
