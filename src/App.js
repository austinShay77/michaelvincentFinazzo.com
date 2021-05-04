import React, { useState } from 'react'
import Contact from './Contact'
import Fish from './Fish'
import Portfolio from './Portfolio'
import About from './About'
import Home from './components/Home'
import DropDown from './components/DropDown'
import Navbar from './components/Navbar'
import { SliderData } from './data/SliderData'
import GlobalStyle from './globalStyles'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
        <Navbar />

          <Switch>
            <Route exact path="/">
              <Home slides={SliderData} />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Fish">
              <Fish />
            </Route>
          </Switch>

      <DropDown isOpen={isOpen} toggle={toggle} />
      
    </BrowserRouter>
  )
}

export default App;
