import React, { useState, useEffect } from 'react';
import './Home.css';
import Country from '../Country/Country';
const Home = () => {
    const [country,setCountry]=useState([]);
    useEffect(() =>{
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res =>res.json())
        .then(data =>setCountry(data))
    },[])
    return (
        <div>
            <h1> All  Country  - {country.length}</h1>
            {
              country.map(country =>
                <Country 
                     country={country}
                     key={country.alpha3Code}
                ></Country>)  
            }
        </div>
    );
};

export default Home;