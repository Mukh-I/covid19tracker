import React, { useState, useEffect } from "react";
import "../Styles/World_Summary.css";
import "../Styles/App.css";
import { CardContent, Card, Typography } from "@material-ui/core";
import Numeral from "numeral";

function WorldSummary() {
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    const fetchGlobalData = async () => {
      fetch("https:disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setGlobalData(data);
        });
      console.log(globalData);
    };
    fetchGlobalData();
  }, [globalData]);

  return (
    <div className="world__summary">
      <h3>Current Global Covid-19 Figures</h3>
      <div className="world__summary__content">
        <Card className="world__summary__card">
          <CardContent className="cases">
            <Typography color="textSecondary"> Cases</Typography>
            <h4>{Numeral(globalData.cases).format("0,0")}</h4>
            <Typography color="textSecondary">
              +{Numeral(globalData.todayCases).format("0,0")}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="recovered">
            <Typography color="textSecondary">Recovered</Typography>
            <h4>{Numeral(globalData.recovered).format("0,0")}</h4>
            <Typography color="textSecondary">
              +{Numeral(globalData.todayRecovered).format("0,0")}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="deaths">
            <Typography color="textSecondary">Deaths</Typography>
            <h4> {Numeral(globalData.deaths).format("0,0")}</h4>
            <Typography color="textSecondary">
              +{Numeral(globalData.todayDeaths).format("0,0")}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default WorldSummary;
