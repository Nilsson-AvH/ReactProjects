import React, { Component } from "react";
import ProductoDataService from "../services/producto.service";

export default class AddProducto extends Component {
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

    this.saveProducto = this.saveProducto.bind(this);
    this.newProducto = this.newProducto.bind(this);

    this.state = {
      id: null,
      nombre: "",
      tipo: "",
      genero: "",
      edad: "",
      servicio: "",
      fechaservi: "",
      propietario: "",
      telefono: "",
      realizado: false,

      submitted: false
    };
  }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }

  onChangeTipo(e) {
    this.setState({
      tipo: e.target.value
    });
  }

  onChangeGenero(e) {
    this.setState({
      genero: e.target.value
    });
  }

  onChangeEdad(e) {
    this.setState({
      edad: e.target.value
    });
  }

  onChangeServicio(e) {
    this.setState({
      servicio: e.target.value
    });
  }

  onChangeFechaservi(e) {
    this.setState({
      fechaservi: e.target.value
    });
  }

  onChangePropietario(e) {
    this.setState({
      propietario: e.target.value
    });
  }

  onChangeTelefono(e) {
    this.setState({
      telefono: e.target.value
    });
  }

  saveProducto() {
    var data = {
      nombre: this.state.nombre,
      tipo: this.state.tipo
    };

    ProductoDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nombre: response.data.nombre,
          tipo: response.data.tipo,
          genero: response.data.genero,
          edad: response.data.edad,
          servicio: response.data.servicio,
          fechaservi: response.data.fechaservi,
          propietario: response.data.propietario,
          telefono: response.data.telefono,
          realizado: response.data.realizado,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProducto() {
    this.setState({
      id: null,
      nombre: "",
      tipo: "",
      genero: "",
      edad: "",
      servicio: "",
      fechaservi: "",
      propietario: "",
      telefono: "",
      realizado: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>¡Mascota agregada satisfactoriamente!</h4>
            <button className="btn btn-success" onClick={this.newProducto}>
              Agregar
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                required
                value={this.state.nombre}
                onChange={this.onChangeNombre}
                name="nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipo">Tipo de mascota</label>
              <input
                type="text"
                className="form-control"
                id="tipo"
                required
                value={this.state.tipo}
                onChange={this.onChangeTipo}
                name="tipo"
              />
            </div>

            <button onClick={this.saveProducto} className="btn btn-success">
              Enviar
            </button>
          </div>
        )}
      </div>
    );
  }
}
