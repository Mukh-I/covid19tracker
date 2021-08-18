import React, {useEffect, useState} from 'react'
import '../Styles/TableData.css'
import Numeral from 'numeral'



function TableData() {

    const [tableData, setTableData] = useState([])


    useEffect(() => {

    const fetchTableData = async () => {
    await fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
   .then((response) => response.json())
   .then((data) => {
      const tableData = data.map((country) => ({
           
               country: country.country,
               cases: country.cases
               
               
           
           })); 
         setTableData(tableData)
         
       })

   }
   fetchTableData()
}, []);

      

  

   


    return (
        <div className="table">
        <h4>Live Cases By Country</h4>
        <table>
          <thead>
         
           <tr>
              {tableData.map((c) => {
                  return <tr className="table_row"><td>{c.country}</td><td>{Numeral(c.cases).format('0,0')}</td></tr>
                         
              })}
            </tr>
            
         
        
        </thead>
        <tbody>
    
           
         </tbody>
        </table>
            
        </div>
    )
}

export default TableData
