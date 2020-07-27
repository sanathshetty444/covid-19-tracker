import React from 'react';
import ReactDOM from 'react-dom'
import {fetchData} from './api';
// import Cards from './components/Cards/Cards';
import styles from './App.module.css'
import cimg from './images/image.png'
import {Cards,Chart,CountryPicker} from './components'
class App extends React.Component{
    state={
        data:{},
        country:'',
    }



    async componentDidMount(){
        const fetcheddata=await fetchData();
        // console.log(data);
        this.setState({data:fetcheddata})
    }


    handleCountryChange=async(country)=>{
        const fetcheddata=await fetchData(country);
        this.setState({data:fetcheddata,country:country})
    }


    render(){
        const {data,country} =this.state;
        return(
           <div className={styles.container}>
               <img src={cimg} className={styles.image} alt='Covid-19'/>
               <Cards data= {data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
           </div>
        )

    }
}
export default App;
