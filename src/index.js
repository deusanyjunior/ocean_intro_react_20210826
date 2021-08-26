import React from "react";
import ReactDOM from "react-dom";
import Agua from "./Agua";
import Inicial from "./Inicial";
import Contato from "./Contato";
import {Route, NavLink, HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <div>
            <h1>Single Page Application - SPA</h1>
            <ul>
                <li>
                    <NavLink to="/">Água</NavLink>
                </li>
                <li>
                    <NavLink to="/inicial">Inicial</NavLink>
                </li>
                <li>
                    <NavLink to="/contato">Contato</NavLink>
                </li>
            </ul>
            <div>
                <Route path="/" component={Agua} />
                <Route path="/inicial" component={Inicial} />
                <Route path="/contato" component={Contato} />
            </div>
        </div>
    </HashRouter>,
    document.getElementById("root")
);