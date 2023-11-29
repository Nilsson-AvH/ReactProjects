import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import AddProducto from "./components/add-producto.components";
import Producto from "./components/producto.components";
import ProductoList from "./components/productos-list.components";
import { Component } from "react";
import { render } from 'react-dom';

/*function App() {*/
class App extends Component {
  render() {
  return (
    <div>
      <nav className="navbar-expand navbar-dark bg-dark">
        <a href="/productos" className="navbar-brand">
          Ferreteria
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/productos"} className="nav-link">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/productos"]} component={ProductoList} />
          <Route exact path="/add" component={AddProducto} />
          <Route path="/productos/:id" component={Producto} />
        </Switch>
      </div>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}
}

export default App;
