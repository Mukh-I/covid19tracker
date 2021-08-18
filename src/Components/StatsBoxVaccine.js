import React, {useState} from 'react'
import { Card, CardContent, Typography} from '@material-ui/core'
import numeral from 'numeral'

function StatsBoxVaccine({title, cases, vaccinationData}) {
  console.log(vaccinationData)
  console.log(vaccinationData[Object.keys(vaccinationData)[0]])
  console.log(vaccinationData[Object.keys(vaccinationData)[1]])
  console.log(vaccinationData[Object.keys(vaccinationData)[3]])

  const lastDayVaccine = vaccinationData[Object.keys(vaccinationData)[2]] - vaccinationData[Object.keys(vaccinationData)[0]]
  console.log(lastDayVaccine)

    return (
      <Card>
       <CardContent className="vaccinated">
            <Typography className="statsBox__title" color="textSecondary">{title}</Typography>
            <h2 className="statsBox__cases">{numeral(lastDayVaccine).format("+0,0")}</h2>
            <Typography className="statsBox__total" color="textSecondary">Total {numeral(vaccinationData[Object.keys(vaccinationData)[0]]).format('0,0')}</Typography>
       </CardContent>
    </Card>
    )
}

export default StatsBoxVaccine
