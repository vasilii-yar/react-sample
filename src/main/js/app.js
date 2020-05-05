"use strict";

import BaseGrid from "./widgets/BaseGrid";
import NavBar from "./widgets/NavBar";
import GridPanel from "./widgets/GridPanel";
import GridRecordsCount from "./widgets/GridRecordsCount";
import GridFilter from "./widgets/GridFilter";
import CardEditDialog from "./widgets/CardEditDialog";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Stub from "./widgets/Stub";
import CardsView from "./CardsView";

const React = require('react');
const ReactDOM = require('react-dom');
const apiRest = require('./api/rest-api');

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavBar/>
                    <div>
                        <Switch>
                            /* Важен порядок тегов Route */
                            <Route path="/view">
                                <CardsView/>
                            </Route>
                            <Route path="/stub">
                                <Stub/>
                            </Route>
                            /* Корневой путь должен быть последним, так как роутер идет сверху по тегам Route и применяет первый который проходит по формату */
                            <Route path="/">
                                <Stub/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <React.Fragment>
        <App/>
    </React.Fragment>,

    document.getElementById('react')
)