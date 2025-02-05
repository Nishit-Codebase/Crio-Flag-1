// import React from "react"
import { useEffect, useState } from "react";
import "./Flag.css";

// eslint-disable-next-line react/prop-types
const CountryCard = ({name,flag}) => {

    return(
        <div style={{
            height:"200px",
            width:"200px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            margin:"10px",
            border:"solid",
            borderRadius:"5%",
            textAlign:"center"
            }}>
        <img style={{
            height:"80px",
             width:"80px",
             display:"flex",
             alignItems:"center",

             }} src={flag} alt={`Flag of ${name}`} />   
        <h2>{name}</h2>
        </div>
    
    )


}

export default function FlagsCard(){

    const [Flag,setFlag] = useState([]);

    useEffect(()=>{
        const apifetch = async () => { 
            try{

            
            const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
            const data =  await response.json();
            setFlag(data);
        }catch(e){
            console.error(e);
        } 
        }
        apifetch();    
    },[])
    
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap",
        }} className="flags-container">
          {Flag.map((country) => (
            <CountryCard key={country.abbr} name={country.name} flag={country.flag} />
          ))}
        </div>
      );
    
}
