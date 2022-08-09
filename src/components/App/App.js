import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Header from "../header/Header";
import Schedule from "../public/Schedule";
import Authors from "../public/Authors";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Schedule}></Route>
                    <Route path='/authors' component={Authors}></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
