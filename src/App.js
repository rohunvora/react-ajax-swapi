import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Starship from './Starship'
import StarshipData from './StarshipData'

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Starship} />
        <Route path='/starship' render={({location}) => <StarshipData location={location}/>
        }/>
      </Switch>
    </Router>
  )
}

export default App
