import React from 'react'
import { Card, CardContent, Typography} from '@material-ui/core'
import numeral from 'numeral'
import '../Styles/StatsBox.css'

function StatsBox({title, id, cases, total, handleClick, setHandleClick}) {

  const handleOnClick = () => {
    setHandleClick(id)
    console.log(handleClick)

    
    
  }

    return (
      <Card onClick={handleOnClick}>
       <CardContent className={id}>
            <Typography className="statsBox__title" color="textSecondary">{title}</Typography>
            <h2 className="statsBox__cases">{numeral(cases).format("+0,0")}</h2>
            <Typography className="statsBox__total" color="textSecondary">Total {numeral(total).format('0,0')}</Typography>
       </CardContent>
    </Card>
    )
}

export default StatsBox

