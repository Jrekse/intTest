import React, { useRef, useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import cats from '../APIs/cats';

function Search() {

    const [query, setQuery] = useState("");
    const [useData, setUseData] = useState([]);
    const [SWdata, setSWData] = useState([]);
    const [shipData, setShipData] = useState([]);
    const [planetData, setPlanetData] = useState([]);
    const [catData, setCatData] = useState([])

    const dataGroup = localStorage.getItem('currentDataGroup')

    const catNames = [{name:'Cherie'}, {name:'Terry'}, {name:'Larry'}, {name:'Gary'}, {name:'Barry'}, {name:'Carrie'}, {name:'Mary'}, {name:'Jerry'}, {name:'Peri'}, {name:'Tod'}]
    
    let array1 = [0,10,20,30]; let array2 = [1,11,21,31]; let array3 = [2,12,22,32]; let array4 = [3,13,23,33]; let array5 = [4,14,24,34]; let array6 = [5,15,25,35]; let array7 = [6,16,26,36]; let array8 = [7,17,27,37]; let array9 = [8,18,28,38]; let array10 = [9,19,29,39]

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

    }, []);



    return (
        <section className="searchBar">

            <input placeholder="What are you looking for?" className="searchInput" onChange={
                event => setQuery(event.target.value)}
            />
  
            <br/><br/>
            
            <button className="cats" onClick={
                () => filter(catData) + localStorage.setItem('currentDataGroup', "cats")
            }>Cats</button>
            <button className="all" onClick={
                () => filter(SWdata.concat(shipData.concat(planetData.concat(catNames)))) + localStorage.setItem('currentDataGroup', "sw")
            }>All</button>
            <button className="starWarsPe" onClick={
                () => filter(SWdata) + localStorage.setItem('currentDataGroup', "sw")
            }>People</button>
            <button className="starWarsS" onClick={
                () => filter(shipData) + localStorage.setItem('currentDataGroup', "sw")
            }>Ships</button>
            <button className="starWarsPl" onClick={
                () => filter(planetData) + localStorage.setItem('currentDataGroup', "sw")
            }>Planets</button>
            <button className="reset" onClick={
                () => window.location.reload()
            }>Reset</button>

            <br/><br/><hr/>

            <div className="listBox">

                {useData.filter(item => {

                    if (query === '') {
                        return item;
                    } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                        return item;
                    }

                }).map((item, index) => {

                    if (dataGroup === 'sw') {

                        return  (
                            <div className="listedName" key={index}> 
                                <p onClick={
                                    () => localStorage.setItem('selectedProfile', index) + update()
                                }><u>{item.name}</u></p>
                            {/* <p id='foo'><u>{item.name}</u></p> */}
                            </div>
                        )

                    } else if (dataGroup === 'cats'){

                        return (
                            <div className="listedName" key={index}>
                                <img className='catImgs' src={item.url} alt='cat'/>
                                <p onClick={
                                    console.log('jomam')
                                    // () => selectProfile(index) 
                                } ><u>{catNames[index].name}</u></p>
                            </div>
                        )

                    }
                    
                })}
            </div>

        </section>

        
    )

    function filter(props){
        setUseData(props)
    }

    function update() {
        console.log(localStorage.getItem('selectedProfile'))
        profile()
    }

    function profile(){
        
        const selectedProfile = localStorage.getItem('selectedProfile')
        const BreakError = {};
        let bigArray = array1.concat(array2,array3,array4,array5,array6,array7,array8,array9,array10)

        try {

            bigArray.filter(item => {
                if (array1.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array1)
                    throw BreakError
                } else if (array2.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array2)
                    throw BreakError
                } else if (array3.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array3)
                    throw BreakError
                } else if (array4.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array4)
                    throw BreakError
                } else if (array5.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array5)
                    throw BreakError
                } else if (array6.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array6)
                    throw BreakError
                } else if (array7.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array7)
                    throw BreakError
                } else if (array8.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array8)
                    throw BreakError
                } else if (array9.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array9)
                    throw BreakError
                } else if (array10.includes(Number(selectedProfile))){
                    console.log(selectedProfile)
                    console.log(array10)
                    throw BreakError
                }
            })

        } catch (err) {

            if (err !== BreakError) throw err;

        }

    }



    

}



export default Search;