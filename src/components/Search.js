import React, { useState, useEffect } from "react";
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

    }, []);

    useEffect(() => {

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
            <button className="starWars" onClick={
                () => filter(SWdata) + localStorage.setItem('currentDataGroup', "sw")
            }>People</button>
            <button className="starWars" onClick={
                () => filter(shipData) + localStorage.setItem('currentDataGroup', "sw")
            }>Ships</button>
            <button className="starWars" onClick={
                () => filter(planetData) + localStorage.setItem('currentDataGroup', "sw")
            }>Planets</button>
            <button className="reset" onClick={
                () => window.location.reload()
            }>Reset</button>

            <br/><br/><hr/>

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
                            <p><u>{item.name}</u></p>
                            <hr/>
                        </div>
                    )

                } else if (dataGroup === 'cats'){

                    return (
                        <div key={index}>
                            <img className='catImgs' src={item.url} alt='cat'/>
                            <p className="listedName" ><u>{catNames[index].name}</u></p>
                        </div>
                    )

                }
                
            })}

        </section>
    )

    function filter(props){
        setUseData(props)
    }

}

export default Search;