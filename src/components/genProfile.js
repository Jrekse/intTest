import React, { useRef, useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import cats from '../APIs/cats';
import random from '../APIs/random'

function Profile(){

    const [SWdata, setSWData] = useState([]);
    const [shipData, setShipData] = useState([]);
    const [planetData, setPlanetData] = useState([]);
    const [catData, setCatData] = useState([]);
    const [userData, setUserData] = useState([]);

    // let selectedProfile = localStorage.getItem('selectedProfile');

    let selectData = localStorage.getItem('selectedData').split(",")

    let test = selectData[0]

    // const catNames = [{name:'Cherie'}, {name:'Terry'}, {name:'Larry'}, {name:'Gary'}, {name:'Barry'}, {name:'Carrie'}, {name:'Mary'}, {name:'Jerry'}, {name:'Peri'}, {name:'Tod'}]

    useEffect(() => {

        starwars.getPeople().then((response) => {
          console.log("star wars", response);
          setSWData(response);
        });
        starwars.getStarships().then((response) => {
            console.log("star wars ships", response);
            setShipData(response);
          });
        starwars.getPlanets().then((response) => {
            console.log("star wars pl", response);
            setPlanetData(response);
        });

        cats.get100Cats().then((response) => {
            console.log("cats", response);
            setCatData(response);
        });

        random.getUsers().then((response) => {
            console.log("users", response);
            setUserData(response);  
        });

        // loads()

    }, []);

    return (

       <div className="genProfile">
            <section className="profTop">
                <div className="profCaptain">
                    {SWdata.map((item, index) => {
                        if(index === Number(test)){
                            console.log(index)
                            console.log(test)
                            return <p key={index}>{item.name}</p>
                        }
                    })}
                </div>
                <div className="profShip">

                </div>
                <div className="profPlanet">

                </div>
            </section>
            <section className="profBottom">
                <div className="profCrew">

                </div>
                <div className="govCat">

                </div>
            </section>
       </div>

    )

    // function loadarray(){

    //     let selectData = localStorage.getItem('selectedData')
    //     // let dataArray = [SWdata[selectData], shipData[selectData], planetData[selectData], catData[selectData],userData[selectData]]

    //     // console.log(SWdata[selectData].name)
    //     // console.log(localStorage.getItem('selectedData'));
    // }

};

window.addEventListener('load', (event) => {

    const selectedProfile = localStorage.getItem('selectedProfile')
    let array1 = [0,10,20,30]; let array2 = [1,11,21,31]; let array3 = [2,12,22,32]; let array4 = [3,13,23,33]; let array5 = [4,14,24,34]; let array6 = [5,15,25,35]; let array7 = [6,16,26,36]; let array8 = [7,17,27,37]; let array9 = [8,18,28,38]; let array10 = [9,19,29,39]
    let bigArray = array1.concat(array2,array3,array4,array5,array6,array7,array8,array9,array10)
    const BreakError = {};

    try {

        bigArray.filter(item => {
            if (array1.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array1)
                throw BreakError
            } else if (array2.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array2)
                throw BreakError
            } else if (array3.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array3)
                throw BreakError
            } else if (array4.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array4)
                throw BreakError
            } else if (array5.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array5)
                throw BreakError
            } else if (array6.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array6)
                throw BreakError
            } else if (array7.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array7)
                throw BreakError
            } else if (array8.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array8)
                throw BreakError
            } else if (array9.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array9)
                throw BreakError
            } else if (array10.includes(Number(selectedProfile))){
                console.log(selectedProfile)
                localStorage.setItem("selectedData", array10)
                throw BreakError
            }
        })

    } catch (err) {

        if (err !== BreakError) throw err;

    }

});

export default Profile;