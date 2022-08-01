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

    
    let filteredItems
    
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
  
            <br/>

            <p>Filter your results</p>
            
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

                <p>Click to See More</p>

                {useData.filter(item => {

                    if (query === '') {
                        return item;
                    } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                        return item;
                    }

                }).map((item, index) => {

                    if (dataGroup === 'sw') {

                        return  (
                            <div className="listedName" id="mainList" key={index}> 
                                <p id="mainListItem" onClick={
                                    () => localStorage.setItem('selectedProfile', index) + 
                                    localStorage.setItem('page', 'profile')  + update()
                                }><u>{item.name}</u></p>
                                <p className="delete" onClick={
                                    () => remove(index)
                                }>Delete item</p>
                            </div>
                        )

                    } else if (dataGroup === 'cats'){

                        return (
                            <div className="listedName" key={index}>
                                <img className='catImgs' src={item.url} alt='cat'/>
                                <p onClick={
                                    () => localStorage.setItem('selectedProfile', index) + 
                                    localStorage.setItem('page', 'profile') + update() 
                                } ><u>{catNames[index].name}</u></p>
                            </div>
                        )

                    }
                    
                })}
            </div>

        </section>

        
    )

    function remove(props){
        const items = useData[props]
        filteredItems = useData.filter(item => item !== items)
        console.log(filteredItems)
        setUseData(filteredItems)
        console.log(setUseData)
    }

    //selects the filter being used
    function filter(props){
        setUseData(props)
        console.log(setUseData)
    }

    //updates the values for pagination... had to learn the hard way that useState doesnt automatically update when it changes
    function update() {
        console.log(localStorage.getItem('selectedProfile'))
        console.log(localStorage.getItem('page'))
        window.location.reload()
    }

}



export default Search;