import React, { Component } from "react";
import ProductoDataService from "../services/producto.service";

export default class Producto extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeTipo = this.onChangeTipo.bind(this);
    this.onChangeGenero = this.onChangeGenero.bind(this);
    this.onChangeEdad = this.onChangeEdad.bind(this);
    this.onChangeServicio = this.onChangeServicio.bind(this);
    this.onChangeFechaservi = this.onChangeFechaservi.bind(this);
    this.onChangePropietario = this.onChangePropietario.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);

    this.getProducto = this.getProducto.bind(this);
    this.updatePublicado = this.updatePublicado.bind(this);
    this.updateProducto = this.updateProducto.bind(this);
    this.deleteProducto = this.deleteProducto.bind(this);

    this.state = {
      currentProducto: {
        id: null,
        nombre: "",
        tipo: "",
        genero: "",
        edad: "",
        servicio : "",
        fechaservi: "",
        propietario: "",
        telefono: "",
        realizado: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getProducto(this.props.match.params.id);
  }

  onChangeNombre(e) {
    const nombre = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProducto: {
          ...prevState.currentProducto,
          nombre: nombre
        }
      };
    });
  }

  onChangeTipo(e) {
    const tipo = e.target.value;
    
    this.setState(prevState => ({
      currentProducto: {
        ...prevState.currentProducto,
        tipo: tipo
      }
    }));
  }

  onChangeGenero(e) {
    const genero = e.target.value;
    
    this.setState(prevState => ({
      currentProducto: {
        ...prevState.currentProducto,
        genero: genero
      }
    }));
  }

  onChangeEdad(e) {
    const edad = e.target.value;
    
    this.setState(prevState => ({
      currentProducto: {
        ...prevState.currentProducto,
        edad: edad
      }
    }));
  }

  onChangeServicio(e) {
    const servicio = e.target.value;
    
    this.setState(prevState => ({
      currentProducto: {
        ...prevState.currentProducto,
        servicio: servicio
      }
    }));
  }

  onChangeFechaservi(e) {
    const fechaservi = e.target.value;
    
    this.setState(prevState => ({
      currentProducto: {
        ...prevState.currentProducto,
        fechaservi: fechaservi
      }
    }));
  }

  onChangePropietario(e) {
    const propietario = e.target.value;
    
    this.setState(prevState => ({
      currentProducto: {
        ...prevState.currentProducto,
        propietario: propietario
      }
    }));
  }

  onChangeTelefono(e) {
    const telefono = e.target.value;
    
    this.setState(prevState => ({
      currentProducto: {
        ...prevState.currentProducto,
        telefono: telefono
      }
    }));
  }

  getProducto(id) {
    ProductoDataService.get(id)
      .then(response => {
        this.setState({
          currentProducto: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublicado(status) {
    var data = {
      id: this.state.currentProducto.id,
      nombre: this.state.currentProducto.nombre,
      tipo: this.state.currentProducto.tipo,
      genero: this.state.currentProducto.genero,
      edad: this.state.currentProducto.edad,
      servicio: this.currentProducto.servicio,
      fechaservi: this.currentProducto.fechaservi,
      propietario: this.currentProducto.propietario,
      telefono: this.currentProducto.telefono,
      realizado: status
    };

    ProductoDataService.update(this.state.currentProducto.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentProducto: {
            ...prevState.currentProducto,
            realizado: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProducto() {
    ProductoDataService.update(
      this.state.currentProducto.id,
      this.state.currentProducto
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "¡Registro actualizado con exito!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProducto() {    
    ProductoDataService.delete(this.state.currentProducto.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/productos')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentProducto } = this.state;

    return (
      <div>
        {currentProducto ? (
          <div className="edit-form">
            <h4>Mascota</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={currentProducto.nombre}
                  onChange={this.onChangeNombre}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tipo">Tipo</label>
                <input
                  type="text"
                  className="form-control"
                  id="tipo"
                  value={currentProducto.tipo}
                  onChange={this.onChangeTipo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="genero">Genero</label>
                <input
                  type="text"
                  className="form-control"
                  id="genero"
                  value={currentProducto.genero}
                  onChange={this.onChangeGenero}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <input
                  type="text"
                  className="form-control"
                  id="edad"
                  value={currentProducto.edad}
                  onChange={this.onChangeEdad}
                />
              </div>
              <div className="form-group">
                <label htmlFor="servicio">Servicio</label>
                <input
                  type="text"
                  className="form-control"
                  id="servicio"
                  value={currentProducto.servicio}
                  onChange={this.onChangeServicio}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fechaservi">Fecha del servicio</label>
                <input
                  type="text"
                  className="form-control"
                  id="fechaservi"
                  value={currentProducto.fechaservi}
                  onChange={this.onChangeFechaservi}
                />
              </div>
              <div className="form-group">
                <label htmlFor="propietario">Papás de la mascota</label>
                <input
                  type="text"
                  className="form-control"
                  id="propietario"
                  value={currentProducto.propietario}
                  onChange={this.onChangePropietario}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  value={currentProducto.telefono}
                  onChange={this.onChangeTelefono}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentProducto.realizado ? "Publicado" : "Pendiente"}
              </div>
            </form>

            {currentProducto.realizado ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublicado(false)}
              >
                Pendiente
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublicado(true)}
              >
                Realizado
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteProducto}
            >
              Borrar
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProducto}
            >
              Actualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor elije una mascota...</p>
          </div>
        )}
      </div>
    );
  }
}
