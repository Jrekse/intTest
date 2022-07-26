import React, { useState, useEffect } from "react";
// import random from '../APIs/random'
import Search from "./Search";
import '../Assets/style.css'

function MainFunctional() {
  // const [userData, setUserData] = useState([])



  // useEffect(() => {
  //   random.getUsers().then((response) => {
  //     console.log("users", response);
  //     setUserData(response);
  //   });
  // }, []);

  return (
    <div className="App">
      <Search/>
    </div>
  );
}

export default MainFunctional;
