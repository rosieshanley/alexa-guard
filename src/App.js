import React, { useState, useEffect } from "react";
import axios from "axios";
import time from "dayjs";
import Grid from "@material-ui/core/Grid";
import amazonLogo from "./assets/amazon.png";
import audioFile from "./assets/audio-file.png";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState();
  const url = "https://wqjiv6ktei.execute-api.us-west-2.amazonaws.com/api/";

  useEffect(() => {
    const interval = setInterval(
      () =>
        axios.get(url).then(res => {
          console.log("ahoy");
          return setEvents(res.data.records);
        }),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  const createEventTile = event => (
    <Grid
      item
      xs={12}
      md={6}
      lg={3}
      className="tile"
      key={event[1].stringValue}
    >
      <img
        src={audioFile}
        className="tile-image"
        alt="audio file placeholder"
      />
      <div className="tile-text">
        <div>Gunshot Detected in Rm 201.B</div>
        <div>{event[1].stringValue}</div>
        <a className="verify-link" href={event[5].stringValue} download>
          Click to Verify
        </a>
      </div>
    </Grid>
  );

  const eventTiles = events && events.map(event => createEventTile(event));

  return (
    <div className="app">
      <div>ALEXA CLASSROOM GUARD</div>
      <img src={amazonLogo} className="logo" alt="amazon logo" />
      <div className="event-tiles">
        <Grid container spacing={3} className="event-tiles">
          {events ? eventTiles : "Loading Events..."}
        </Grid>
      </div>
    </div>
  );
};

export default App;
