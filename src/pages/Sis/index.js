import React, { useState, Suspense, lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

import Sidebar from '~/components/Sidebar';
import { Wrap, Main, NavBar } from './styles';

const Dashboard = lazy(() => import('./Dashboard'));

export default function Sis() {

    const [ drag, setDrag ] = useState(false);
    return (
        <Wrap>
            <Sidebar drag={drag} />
            <Main>
                <NavBar>
                    <FontAwesomeIcon className="toggle" style={{ marginLeft: drag ? 145 : 0}} icon={faBars} onClick={(e) => drag ? setDrag(false) : setDrag(true)} />
                    <h4 className="name"><FontAwesomeIcon icon={faUser} /> Luis Otávio</h4>
                    <ul>
                        <li><FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: 3}} size="2x"/></li>
                    </ul>
                </NavBar>
                <div className="content">
                    <div className="row">
                        <Suspense fallback={
                            <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <div className="loader"></div>
                            </div>
                        }>
                            {/* Your pages */}
                            <Switch>
                                <Route exact path='/' component={Dashboard} />
                                <Route path='/page1' component={() => <h1>Your Page 1</h1>}/>
                                <Route path='/page2' component={() => <h1>Your Page 2</h1>}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </Main>
        </Wrap>
    );
}

