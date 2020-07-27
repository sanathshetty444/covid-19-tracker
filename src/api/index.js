import axios from 'axios';
const url ='https://covid19.mathdro.id/api';
export const fetchData= async (country)=>{
    let changeableurl=url;
    if(country){
        changeableurl=`${url}/countries/${country}`
    }
    try {
        const {data}=await axios.get(changeableurl);
        const modifiedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        // return response;
        return modifiedData;
        // console.log(response);
    } catch (error) {
        
    }
}
export const fetchDailyData=async function(){
    try {
        const {data}=await axios.get(`${url}/daily`);
        console.log(">>>>>??????",data)
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return modifiedData;
        
    } catch (error) {
        
    }
}
export const fetchCountries=async function(){
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`)
        return countries.map((country)=>country.name);
    } catch (error) {
        
    }
}


