import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faFolderOpen, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Country.css';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Country = (props) => {
    const {name,capital,population,region,borders,flag}=props.country;
    const history = useHistory();
    const handleClick=(name)=>{
        const url = `/Country/${name}`;
        history.push(url);
    };
    return (
        <div className="country">            
             <h2> <FontAwesomeIcon icon={faDatabase} />  Country   : {name} <br/> <Link to={`/Country/${name}`}>
            <FontAwesomeIcon icon={faArrowRight}/> Show detail of  {name}</Link></h2>
            <img style={{height:'50px'}} src={flag} all=""/>
            <h2> Capital : {capital}</h2>
            <h3> Population :{population}</h3>
            <h4> Border :{borders}</h4>
            <h4> Region :{region}</h4>                        
            <Button onClick={()=>handleClick(name)} variant="primary"><FontAwesomeIcon icon={faFolderOpen} />Primary</Button>            
        </div>
    );
};

export default Country;