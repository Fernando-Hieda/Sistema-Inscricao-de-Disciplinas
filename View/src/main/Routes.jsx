import React from 'react'
import { Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/home'
import UserCrud from '../components/user/UserCrud'
import OfertaCrud from '../components/oferta/OfertaCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/ofertas' component={OfertaCrud} />
        <Redirect from='*' to='/' />
    </Switch>