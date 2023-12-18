import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import './styles.css';
import FirstApp from "./FirstApp";

ReactDOM.createRoot (document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={123} />
        {/* <FirstApp title="Hola, Soy Vegueta"/> */}
    </React.StrictMode>
)