import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ThisClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'real_name',
            alias_1: 'nick1',
            alias_2: 'nick2'
        }
    }

    render () {
                return (<div>
                  <div> MY Div </div>
                  <App />
                </div>);
              }
}

ReactDOM.render(<ThisClass />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
