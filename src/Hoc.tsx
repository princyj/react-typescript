import React, {Component} from "react";

const initialState = {
    name: 'Manny',
    message: 'Typescript is cool!'
  }

 

type State = Readonly<typeof initialState>; 