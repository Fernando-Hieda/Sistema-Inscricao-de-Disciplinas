import React from 'react'
import { Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/home'
import UserCrud from '../components/user/UserCrud'
import DisciplinaCrud from '../components/disciplina/DisciplinaCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/disciplinas' component ={DisciplinaCrud} />
        <Redirect from='*' to='/' />
    </Switch>