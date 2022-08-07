import React, { useState, useEffect } from "react";
import useSearch from "./Search";
import Profile from "./genProfile"
import '../Assets/style.css'

function MainFunctional() {


  // this was fun to learn, I have never tried to pass state up to a parent
  // component using this kind of function
  const {render, paginate, selectedProfile} = useSearch()

  //pagination
  if(paginate === "search"){
    return(<>{render}</>)
  } else if (paginate === "profile"){
    return (<Profile {...{selectedProfile}}/>)
  } else {
    return(<>{render}</>)
  }

}

export default MainFunctional;
