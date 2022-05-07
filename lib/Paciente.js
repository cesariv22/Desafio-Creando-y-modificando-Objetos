"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this._nombre = () => nombre;

    this._edad = () => edad;

    this._rut = () => rut;

    this._diagnostico = () => diagnostico;
  }

  get nombre() {
    return this._nombre();
  }

  get edad() {
    return this._edad();
  }

  get rut() {
    return this._rut();
  }

  get diagnostico() {
    return this._diagnostico();
  }

  imprimirDatos(id, index) {
    const data = document.getElementById(id);
    data.innerHTML += "\n                <tr>\n                <th scope=\"row\">".concat(index, "</th>\n                <td>").concat(this.nombre, "</td>\n                <td>").concat(this.edad, "</td>\n                <td>").concat(this.rut, "</td>\n                <td>").concat(this.diagnostico, "</td>\n                </tr>\n                ");
  }

}

exports.default = Paciente;