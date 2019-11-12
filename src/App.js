import React from "react";
import axios from "axios";
// import time from "dayjs";
// import audioFile from "./assets/audio-file.png";
import "./App.css";

const App = () => {
  const events = axios
    .get("https://wqjiv6ktei.execute-api.us-west-2.amazonaws.com/api/", {
      "Content-Type": "application/json"
    })
    .then(function(response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
      return error;
    });
  console.log(events);

  // const createEventTile = event => (
  //   <>
  //     <img src={audioFile} className="App-logo" alt="audio file placeholder" />
  //     <div>Gunshot Detected in Rm 201.B</div>
  //     <div>{event[1].stringValue}</div>
  //   </>
  // );

  // const eventTiles = events.map(event => createEventTile(event));

  return (
    <div className="App">
      <div>ALEXA CLASSROOM GUARD</div>
      {/* {eventTiles} */}
    </div>
  );
};

export default App;
