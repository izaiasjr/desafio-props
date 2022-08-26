import React, { Component } from "react";

export default class Dados extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Nome:{this.props.nome}</li>
          <li>Idade:{this.props.idade}</li>
          <li>Quer estudar:{this.props.querEstudar}</li>
        </ul>
      </div>
    );
  }
}
