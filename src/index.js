import React from "react";
import ReactDOM from "react-dom";
import Route from "react-router-dom";
import Agua from "./Agua";

ReactDOM.render(
    <Agua fusao={0} ebulicao={100} condicao="CNTP" />,
    document.getElementById("root")
);