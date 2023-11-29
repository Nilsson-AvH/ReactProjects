import React, { Component } from "react";
import ProductoDataService from "../services/producto.service";
import { Link } from "react-router-dom";

export default class ProductosList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchNombre = this.onChangeSearchNombre.bind(this);
    this.retrieveProductos = this.retrieveProductos.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProducto = this.setActiveProducto.bind(this);
    this.removeAllProductos = this.removeAllProductos.bind(this);
    this.searchNombre = this.searchNombre.bind(this);

    this.state = {
      productos: [],
      currentProducto: null,
      currentIndex: -1,
      searchNombre: ""
    };
  }

  componentDidMount() {
    this.retrieveProductos();
  }

  onChangeSearchNombre(e) {
    const searchNombre = e.target.value;

    this.setState({
      searchNombre: searchNombre
    });
  }

  retrieveProductos() {
    ProductoDataService.getAll()
      .then(response => {
        this.setState({
          productos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProductos();
    this.setState({
      currentProducto: null,
      currentIndex: -1
    });
  }

  setActiveProducto(producto, index) {
    this.setState({
      currentProducto: producto,
      currentIndex: index
    });
  }

  removeAllProductos() {
    ProductoDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchNombre() {
    this.setState({
      currentProducto: null,
      currentIndex: -1
    });

    ProductoDataService.findByNombre(this.state.searchNombre)
      .then(response => {
        this.setState({
          productos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchNombre, productos, currentProducto, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre de mascota"
              value={searchNombre}
              onChange={this.onChangeSearchNombre}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchNombre}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Mascotas registradas</h4>

          <ul className="list-group">
            {productos &&
              productos.map((producto, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveProducto(producto, index)}
                  key={index}
                >
                  {producto.nombre}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllProductos}
          >
            Eliminar todo
          </button>
        </div>
        <div className="col-md-6">
          {currentProducto ? (
            <div>
              <h4>Datos de la Mascota</h4>
              <div>
                <label>
                  <strong>Nombre:</strong>
                </label>{" "}
                {currentProducto.nombre}
              </div>
              <div>
                <label>
                  <strong>Tipo:</strong>
                </label>{" "}
                {currentProducto.tipo}
              </div>
              <div>
                <label>
                  <strong>Genero:</strong>
                </label>{" "}
                {currentProducto.genero}
              </div>
              <div>
                <label>
                  <strong>Edad:</strong>
                </label>{" "}
                {currentProducto.edad}
              </div>
              <div>
                <label>
                  <strong>Servicio solicitado:</strong>
                </label>{" "}
                {currentProducto.servicio}
              </div>
              <div>
                <label>
                  <strong>Fecha:</strong>
                </label>{" "}
                {currentProducto.fechaservi}
              </div>
              <div>
                <label>
                  <strong>Papás de la mascota:</strong>
                </label>{" "}
                {currentProducto.propietario}
              </div>
              <div>
                <label>
                  <strong>Teléfono:</strong>
                </label>{" "}
                {currentProducto.telefono}
              </div>
              <div>
                <label>
                  <strong>Estado del servicio:</strong>
                </label>{" "}
                {currentProducto.realizado ? "Realizado" : "Pendiente"}
              </div>

              <Link
                to={"/productos/" + currentProducto.id}
                className="badge badge-warning"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Por favor elija una mascota...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
