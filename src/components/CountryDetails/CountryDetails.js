import React, { useState, useEffect } from 'react';
import  './CountryDetails.css';
import { useParams } from 'react-router-dom';


const CountryDetails = () => {
    const {name}=useParams();


     const [country,setCountry] =useState([]);
    
    useEffect(() =>{
        const url =`https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setCountry(data[0]))
    },[])
    return (
        <div style={{border: "1px solid teal"}}>
            <img  style={{height:"50px"}} src={country.flag} alt=""/>
            <h2> {name} </h2>  
           <h3>{country.capital}</h3>  
           <h4>{country.population}</h4>  
           <h5>{country.region}</h5>  
           <h5>{country.borders}</h5>  
           <h6>{country.nativeName}</h6>  

        </div>
    );
};

export default CountryDetails;