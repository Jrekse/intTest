import React, {useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import cats from '../APIs/cats';
import random from '../APIs/random'


function Profile({selectedProfile}){

    const [SWdata, setSWData] = useState([]);
    const [shipData, setShipData] = useState([]);
    const [planetData, setPlanetData] = useState([]);
    const [catData, setCatData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [selectedData, setSelectedData] = useState('')

    let selectData = selectedData
    let test = selectData[0] 

    const catNames = [{name:'Cherie'}, {name:'Terry'}, {name:'Larry'}, {name:'Gary'}, {name:'Barry'}, {name:'Carrie'}, {name:'Mary'}, {name:'Jerry'}, {name:'Peri'}, {name:'Tod'}]

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

    }, []);

    useEffect(() => {
        // moved this section (49-91) up here so it could see the state, rather than 
        // in the window load function where i had to use localStorage due to scope 
        const  selecteddProfile = selectedProfile
        console.log(selecteddProfile)
        let array1 = [0,10,20,30]; let array2 = [1,11,21,31]; let array3 = [2,12,22,32]; let array4 = [3,13,23,33]; let array5 = [4,14,24,34]; let array6 = [5,15,25,35]; let array7 = [6,16,26,36]; let array8 = [7,17,27,37]; let array9 = [8,18,28,38]; let array10 = [9,19,29,39]
        const BreakError = {};

        try {

            if (array1.includes(Number( selecteddProfile))){
                setSelectedData(array1)
                throw BreakError
            } else if (array2.includes(Number( selecteddProfile))){
                setSelectedData(array2)
                throw BreakError
            } else if (array3.includes(Number( selecteddProfile))){
                setSelectedData(array3)
                throw BreakError
            } else if (array4.includes(Number( selecteddProfile))){
                setSelectedData(array4)
                throw BreakError
            } else if (array5.includes(Number( selecteddProfile))){
                setSelectedData(array5)
                throw BreakError
            } else if (array6.includes(Number( selecteddProfile))){
                setSelectedData(array6)
                throw BreakError
            } else if (array7.includes(Number( selecteddProfile))){
                setSelectedData(array7)
                throw BreakError
            } else if (array8.includes(Number( selecteddProfile))){
                setSelectedData(array8)
                throw BreakError
            } else if (array9.includes(Number( selecteddProfile))){
                setSelectedData(array9)
                throw BreakError
            } else if (array10.includes(Number( selecteddProfile))){
                setSelectedData(array10)
                throw BreakError
            }

        } catch (err) {

            if (err !== BreakError) throw err;

        }

    }, []);

    return (
        <div className="genProfile">
                <section className="profTop">
                    <div className="profCaptain">
                        <div className="topper">
                            <p>Captain</p>
                        </div>
                        <div className="daBody">
                            {SWdata.map((item, index) => {
                                if(index === Number(test)){
                                    return (
                                        <div className="profInfo">
                                            <p key={index}>{item.name}</p>
                                            <p key={index}>{item.height} cm</p>
                                            <p key={index}>{item.mass} kg</p>
                                            <p key={index}>{item.gender}</p>
                                            <p key={index}>Born: {item.birth_year}</p>
                                            <h4 className="backBtn" onClick={
                                                // this was easier than trying to pass
                                                // pagination values from both components
                                                ()=> window.location.reload()
                                            }><u>Back To Search</u></h4>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="profShip">
                        <div className="topper">
                            <p>Flagship</p>
                        </div>
                        <div className="daBody">
                            {shipData.map((item, index) => {
                                if(index === Number(test)){
                                    return (
                                        <div className="profInfo">
                                            <p key={index}>{item.name}</p>
                                            <p key={index}>Cost: {item.cost_in_credits} Credits</p>
                                            <p key={index}>Length: {item.length} M</p>
                                            <p key={index}>Civilian Capacity: {item.passengers}</p>
                                            <p key={index}>Cargo Capacity: {item.cargo_capacity} kg</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="profPlanet">
                        <div className="topper">
                            <p>Home Port</p>
                        </div>
                        <div className="daBody">
                            {planetData.map((item, index) => {
                                if(index === Number(test)){
                                    return (
                                        <div className="profInfo">
                                            <p key={index}>{item.name}</p>
                                            <p key={index}>{item.population} Citizens</p>
                                            <p key={index}>Orbital Period: {item.orbital_period} Days</p>
                                            <p key={index}>General Climate is {item.climate}</p>
                                            <p key={index}>Gravity: {item.gravity}</p>
                                        </div>
                                    )
                                }
                            })} 
                        </div>
                    </div>
                </section>
                <section className="profBottom">
                    <div className="profCrew">
                        <div className="topper">
                            <p>Crew Manifest</p>
                        </div>
                        <div className="leftCrew">
                            {userData.map((item, index) => {
                                const arrayOne = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
                                if(arrayOne.includes(index)){
                                    return (
                                        <p key={index}>{item.name.first} {item.name.last}</p>
                                    )
                                }
                            })} 
                        </div>
                        <hr/>
                        <div className="rightCrew">
                            {userData.map((item, index) => {
                                const arrayTwo = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
                                if(arrayTwo.includes(index)){
                                    return (
                                        <p key={index}>{item.name.first} {item.name.last}</p>
                                    )
                                }
                            })} 
                        </div>  
                    </div>
                    <div className="govCat">
                        <div className="topper">
                            <p>Government Assigned Cat (GAT)</p>
                        </div>
                        <div className="daBody">
                            {catData.map((item, index) => {
                                if(index === Number(test)){
                                    return(
                                        <div className="profCatList" key={index}>
                                            <img className='profCatImg' src={item.url} alt='cat'/>
                                            <p>{catNames[index].name}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </section>
        </div>
    )

};


export default Profile;