import React from 'react'
import '../Styles/CountryInfo.css'
import { Card, CardContent, Typography } from '@material-ui/core'
import moment from 'moment';

function CountryInfo({name, flag, continent, updated}) {
    return (
        <div>
            <Card className="countryInfo">
                <CardContent className="countryInfo__cardContent" >
               <h2>{name ? name : 'Afghanistan'}</h2>
               <div>
               <img alt="flag" src={flag}></img>
               </div>
               <Typography color="textSecondary">
               {continent ? continent : 'Asia'}
               </Typography>
               <Typography color="textSecondary" className="timestamp">Updated: {moment(updated).format('MMMM Do YYYY, h:mm:a')}</Typography>
                </CardContent>
        </Card>
    </div>
    )
}

export default CountryInfo
