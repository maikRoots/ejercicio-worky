import React, { Component } from 'react';

class Editor extends Component {
  constructor () {
    super();
    this.state = {
      titulo: '',
      autor: '',
      descripcion: '',
      status: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddArticle(this.state);
    this.setState({
      titulo: '',
      autor: '',
      descripcion: '',
      status: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card card-shadow">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Título"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="autor"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Autor"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <div className="form-group">
            <select
                name="status"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>Borrador</option>
              <option>Publicar</option>
            </select>
          </div>
          <button type="submit" className="btn btn-big btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default Editor;
