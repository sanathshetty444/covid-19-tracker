import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api'
const CountryPicker=function({handleCountryChange}){
   
        const [fetchedCountries,setFetchedCountries]=useState([])
        useEffect(()=>{
            const fetchapi=async()=>{
                setFetchedCountries(await fetchCountries());
            }
            fetchapi();
        },[setFetchedCountries])
        // this will makes sure that useEffect is called only when the array 'fetchedCountires' gets updated else it would call it seemlessly

    
    return(
        <div>
            <FormControl className={styles.FormControl}>
                <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Global
                    </option>
                    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker;