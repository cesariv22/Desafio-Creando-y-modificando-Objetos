"use strict";

var _Paciente = _interopRequireDefault(require("./Paciente.js"));

var _data = require("./data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_data.pacientes.forEach((paciente, i) => {
  const datosPaciente = new _Paciente.default(paciente.nombre, paciente.edad, paciente.rut, paciente.diagnostico);
  datosPaciente.imprimirDatos("pacientes", i + 1);
});