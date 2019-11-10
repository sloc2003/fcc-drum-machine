import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";

class ThisClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "real_name",
      alias_1: "nick1",
      alias_2: "nick2"
    };
  }

  render() {
    return (
      <div id="drum-machine">
        <div className="drum-pads">
          <DrumPad id="Q" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="W" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="E" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="A" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="S" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="D" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="Z" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="X" audioID="unique-audio-ID" src="audio-src"/>
          <DrumPad id="C" audioID="unique-audio-ID" src="audio-src"/>
        </div>
        <div id="display">My Display</div>
      </div>
    );
  }
}

const DrumPad = (props) => {
  return (
    <button className="drum-pad" id={props.audioID} type="button">
      {props.id}
      <audio src={props.src} className="clip" id={props.id} />
    </button>
  );
}

ReactDOM.render(<ThisClass />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
