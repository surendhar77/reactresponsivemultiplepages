import React, { useEffect, useState, useTransition } from 'react'
import {getCountryData} from "../api/postApi"
import Loader from '../components/UI/Loader';
import CountryCard from '../components/Layout/CountryCard';

const Country = () => {
  const [isPendig,startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
  
  useEffect(()=>{
    startTransition(async() => {
     const res = await getCountryData();
    //  console.log(res);
    setCountries(res.data)
    });
  },[]);
  if(isPendig)return (<Loader />)
  return (
 <section className="country-section">
  <ul className="grid grid-four-cols">
    {
      countries.map((curCountry,index) => {
        return <CountryCard country = {curCountry}  key ={index}/>;
      })
    }

  </ul>
 </section>
  )
}

export default Country