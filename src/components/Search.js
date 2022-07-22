import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";

function Search() {
    
    const [query, setQuery] = useState("");
    const [SWdata, setSWData] = useState([]);
    useEffect(() => {
        starwars.getPeople().then((response) => {
          console.log("star wars", response);
          setSWData(response);
        });
    }, []);

    return (
        <section className="searchBar">
            <input placeholder="What are you looking for?" className="searchInput" onChange={event => setQuery(event.target.value)} />
            <button onClick={People()}>People</button>
            <button onClick={Ships()}>People</button>
            <hr/>
            {SWdata.filter(captain => {
                if (query === '') {
                    return captain;
                } else if (captain.name.toLowerCase().includes(query.toLowerCase())) {
                    return captain;
                }
            }).map((item, index) => {
                return  <div key={index}>
                            <p>Captain: {item.name}</p>
                            <hr/>
                        </div>;
            })}
        </section>
    )

    function People(){
        console.log("people")
    }
    function Ships(){
        console.log('Ships')
    }

}

export default Search;