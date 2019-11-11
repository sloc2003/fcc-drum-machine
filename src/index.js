import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import freesound from "./freesound.js";
import * as serviceWorker from "./serviceWorker";

class ThisClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "real_name",
      alias_1: "nick1",
      alias_2: "nick2"
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound(event) {
    console.log(event.target.querySelector("audio"));
  }

  componentDidMount() {
    freesound.setToken("RBLFr36UxS9OMw2xTi5EH5TU5dPoFXKdogfifa9J");
    var fields = "id,name,url";
    freesound.getPack(17,
    (pack) => {
      pack.sounds(
        (sounds) => {
          console.log(sounds.id)
        },
          null
      )
  },
  () => console.log('errorNoSuccess')
    )
}

  render() {
    return (
      <div id="drum-machine">
        <div className="drum-pads">
          <DrumPad
            id="Q"
            audioID="unique-audio-ID"
            src="some-source"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="W"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="E"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="A"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="S"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="D"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="Z"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="X"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
          <DrumPad
            id="C"
            audioID="unique-audio-ID"
            src="audio-src"
            clickHandler={this.playSound}
          />
        </div>
        <div id="display">My Display</div>
      </div>
    );
  }
}

const DrumPad = props => {
  return (
    <button
      className="drum-pad"
      id={props.audioID}
      type="button"
      onClick={props.clickHandler}
    >
      {props.id}
      <audio src={props.src} className="clip" id={props.id} />
    </button>
  );
};

ReactDOM.render(<ThisClass />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
