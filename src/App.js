import './Styles/App.css';
import React, {useState, useEffect} from 'react'
import Header from './Components/Header';
import StatsBox from './Components/StatsBox'  
import StatsBoxVaccine from './Components/StatsBoxVaccine'
import CountryInfo from './Components/CountryInfo'
import LineGraph from './Components/LineGraph'
import TableData from './Components/TableData'
import WorldSummary from './Components/World_Summary'
import { FormControl,CardContent,Card, Select, MenuItem } from '@material-ui/core';
import MapData from './Components/Map';
import "leaflet/dist/leaflet.css"



function App() {
//STATES
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('AFG')
  const [countryInfo, setCountryInfo] = useState({
    country: 'Afghanistan',
    countryInfo:{
      flag: 'https://disease.sh/assets/img/flags/af.png'}
    })
  const [vaccinationData, setVaccinationData] = useState({})
  const [handleClick, setHandleClick] = useState('cases')
  const [center, setCenter] = useState({lat:30, lng: -40.4796})
  const [zoom, setZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([])

 

    console.log(handleClick)
    console.log(countryInfo)


//USE EFFECT TO FETCH COUNTRIES
  useEffect(() => {
    const fetchCountries = async () => {
    await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&allowNull=true')
   .then((response) => response.json())
   .then((data) => {
    console.log(data)
      const countries = data.map((country) => ({
           
               country: country.country,
               value: country.countryInfo.iso3,
               id: country.countryInfo._id,
               flag: country.countryInfo.flag,
               updated:country.updated
           
           })); 
         setCountries(countries)
         setMapCountries(data)
         console.log(countries)

       })
   }
   fetchCountries()
}, []);

//SELECT FIELD COUNTRY TRIGGERS A FETCH REQUEST USING ISO3 CODE OF THE SELECTED COUNTRY

  const onCountryChange = async (e) => {
      const selectedCountry = e.target.value
      const url = selectedCountry === 'worldwide' ? 'https:disease.sh/v3/covid-19/all' : `https:disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`

      await fetch(url)
      .then (response => response.json())
      .then(data => {
          setCountry(selectedCountry)
          setCountryInfo(data)
          console.log(data)
          console.log(data.country)
                console.log(url)

          setCenter({lat: data.countryInfo.lat, lng: data.countryInfo.long})
          setZoom(4)
         
 })

 console.log(countryInfo)

//FETCHING DATA FOR THE COUNTRIES VACCINE DATA
      const requestVaccineData = async () => {
        await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${selectedCountry}?lastdays=3`)
        .then(response => response.json())
        .then(data => {
          setVaccinationData(data.timeline)
        })
        
      }
      requestVaccineData()
}


    return (
        <div className="app">
        <Header/>
        <div className="app__content">
          <div className="app__left">
          <FormControl className="app__dropdown">
          <Select className="app__dropdown__select" variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem key="worldwide" value="worldwide">Worldwide</MenuItem>
  
             {countries.map((country) =>  { 
                return <MenuItem value={country.value}>{country.country}</MenuItem>
            })}
          </Select>
        </FormControl>
         
         

           
        
            <div className="countryInfo__container">
            <CountryInfo name={countryInfo.country} flag={countryInfo.countryInfo.flag}   continent={countryInfo.continent} updated={countryInfo.updated}/>
            <div className="statsBox">
            <StatsBox handleClick={handleClick} setHandleClick={setHandleClick} className="cases" id="cases" title=" Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
            <StatsBox handleClick={handleClick} setHandleClick={setHandleClick} title="Recovered" id="recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
            <StatsBox handleClick={handleClick} setHandleClick={setHandleClick} title="Deaths" id="deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
            <StatsBoxVaccine title="Vaccinated" vaccinationData={vaccinationData}/>
          </div>
            </div>
           
         

            <div>
              <MapData
               handleClick={handleClick}
               countries={mapCountries}
               name={countryInfo.country}
               active={countryInfo.active} 
               critical={countryInfo.critical}
               population={countryInfo.population} 
               center={center} 
               zoom={zoom}/>

              </div>
           

           
              
              <WorldSummary/> 
          </div>
          <Card className="app__right">
           <CardContent>
          
  
              <TableData />
           
           
           </CardContent>
           <CardContent className="lineGraph_Card">
           <LineGraph center={center} country={country} handleClick={handleClick}/>
           </CardContent>
          </Card>
          </div>
      
        </div>



     
    )
}

export default App;
