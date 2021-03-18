import React from 'react'
import cn from 'classnames'

import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import MenuHeader from './components/MenuHeader/MenuHeader'

import GamePage from './routes/Game/Game'
import HomePage from './routes/Home/Home'
import AboutPage from './routes/About/About'
import ContactPage from './routes/Contacts/Contacts'
import ErrorPage from './routes/Error/ErrorPage'


import s from './style.module.css'


export default function App() {
  //fix bgActive
  const match = useRouteMatch('/')
  return (

    <Switch>
      <Route>
        <Route path='/404' render={() => (
          <h1>404 not found</h1>
        )} />
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {
            [s.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/home' component={HomePage} />
              <Route path='/game' component={GamePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/404' component={ErrorPage} />

              <Route render={() => (
                <Redirect to='404' />
              )} />
            </Switch>
          </div>

          <Footer />
        </>
      </Route>


    </Switch>

  )
}
