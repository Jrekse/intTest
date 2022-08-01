import React, { useState, useEffect } from "react";
import Search from "./Search";
import Profile from "./genProfile"
import '../Assets/style.css'

function MainFunctional() {

  //pagination
  if(localStorage.getItem('page') === "search"){
    return(<Search/>)
  } else if (localStorage.getItem('page') === "profile"){
    return (<Profile/>)
  } else {
    return(<Search/>)
  }

}

export default MainFunctional;
