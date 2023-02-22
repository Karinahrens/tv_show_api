import React, {useState, useEffect} from 'react'
import {ShowList} from '../';

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState("");
    
    const [showData, setShowData] = useState([]);
    const [searchString, setSearchString] = useState("Married at First Sight");


    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchString(inputValue);
        setInputValue("");
    }

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
            const rawData = await response.json();
            const data = rawData.map(s => s.show);
            console.log(data)
            setShowData(data);
        }

        searchAPI();

    }, [searchString]);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} placeholder={searchString}
             value={inputValue} required/>
            <input type="submit" value="Search"/>
        </form>
        <ShowList showData={showData}/>
        </>
      )
}
