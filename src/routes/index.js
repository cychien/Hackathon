
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/Home'
import Prediction from 'containers/Prediction'
import NotFound from 'containers/NotFound'
import Header from 'components/Header'

const routes = (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/prediction' component={Prediction} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default routes
