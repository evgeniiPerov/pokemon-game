import React from 'react'
import cn from 'classnames'


import { useLocation, Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import MenuHeader from './components/MenuHeader/MenuHeader'

import GamePage from './routes/Game/Game'
import HomePage from './routes/Home/Home'
import AboutPage from './routes/About/About'
import ContactPage from './routes/Contacts/Contacts'
import ErrorPage from './routes/Error/ErrorPage'


import { FirebaseContext } from './context/FirebaseContext'
import s from './style.module.css'
import Firebase from './service/firebase'



export default function App() {

  const location = useLocation()
  const isPadding = location.pathname === '/' || location.pathname === '/game/board'


  return (
    <FirebaseContext.Provider value={new Firebase()} >
      <Switch>
        <Route>
          <Route path='/404' render={() => (
            <h1>404 not found</h1>
          )} />
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding
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
    </FirebaseContext.Provider>
  )
}
