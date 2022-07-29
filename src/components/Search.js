import React, { useRef, useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import cats from '../APIs/cats';

function Search() {


    // const ref = useRef(null);
    // componentDidMount() {
        // document.getElementById('foo')
        // .addEventListener('click', this.handleClick)
    // }

    // componentWillUnmount() {
    //     document.getElementById('foo')
    //     .removeEventListener('click', this.handleClick)
    // }
    
    const [query, setQuery] = useState("");
    const [useData, setUseData] = useState([]);
    const [selectedProfile, selectProfile] = useState("")

    const [SWdata, setSWData] = useState([]);
    const [shipData, setShipData] = useState([]);
    const [planetData, setPlanetData] = useState([]);
    const [catData, setCatData] = useState([])

    const dataGroup = localStorage.getItem('currentDataGroup')

    const catNames = [{name:'Cherie'}, {name:'Terry'}, {name:'Larry'}, {name:'Gary'}, {name:'Barry'}, {name:'Carrie'}, {name:'Mary'}, {name:'Jerry'}, {name:'Peri'}, {name:'Tod'}]
    let array1 = []; let array2 = []; let array3 = []; let array4 = []; let array5 = []; let array6 = []; let array7 = []; let array8 = []; let array9 = []; let array10 = []

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

        // const el2 = ref.current;
        // console.log(el2)

        // const el = document.getElementById('foo');
        // console.log(el);
        

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

                    for (let x = 0; x < 1; x++){

                        let sNumber = index.toString().split('');

                        if(0 === index ||'0' === sNumber[1]){
                            array1.push(index)
                        } else if (1 === index ||'1' === sNumber[1]){
                            array2.push(index)
                        } else if (2 === index ||'2' === sNumber[1]){
                            array3.push(index)
                        } else if (3 === index ||'3' === sNumber[1]){
                            array4.push(index)
                        } else if (4 === index ||'4' === sNumber[1]){
                            array5.push(index)
                        } else if (5 === index ||'5' === sNumber[1]){
                            array6.push(index)
                        } else if (6 === index ||'6' === sNumber[1]){
                            array7.push(index)
                        } else if (7 === index ||'7' === sNumber[1]){
                            array8.push(index)
                        } else if (8 === index ||'8' === sNumber[1]){
                            array9.push(index)
                        } else if (9 === index ||'9' === sNumber[1]){
                            array10.push(index)
                        }

                    }

                    if (dataGroup === 'sw') {

                        return  (
                            <div className="listedName" key={index}> 
                                <p onClick={
                                    () => selectProfile(index) + getIt() 
                                }><u>{item.name}</u></p>
                            {/* <p id='foo'><u>{item.name}</u></p> */}
                            </div>
                        )

                    } else if (dataGroup === 'cats'){

                        return (
                            <div className="listedName" key={index}>
                                <img className='catImgs' src={item.url} alt='cat'/>
                                <p onClick={
                                    () => selectProfile(index) + profile()
                                } ><u>{catNames[index].name}</u></p>
                            </div>
                        )

                    }
                    
                })}
            </div>

        </section>

        
    )

    function getIt(){
        if (selectedProfile){
            profile()
        } else {
            console.log('jo mama')
        }
    }

    function filter(props){
        setUseData(props)
    }

    function profile(){
        
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

    // function handleClick() {
    //     selectProfile(index) + profile() 
    // };

}

export default Search;