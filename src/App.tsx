import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import { type } from 'os';

interface UserMessage {
    name: string;
    messageString: string;
}

class App extends Component {
  componentWillMount() {
    console.log('Almost there...')
  }

  componentDidMount() {
    console.log('Finally there...')

  }


  render() {
    //basic types
    let firstValue: string = "Manny";
    let firstNumValue: number = 24;
    let firstBooleanValue: boolean = true;
    let firstArrayValue: number[] = [2, 4, 56];
    let firstArrayNumValue: Array<number>= [2, 4, 56];

    //tuple
    let myTuple: [string, number] = ["", 23];

    //void
    const warning = (): void => {
      console.log('Warning')
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message /> 
        </header>
      </div>
    );
  }
}

export default App;
