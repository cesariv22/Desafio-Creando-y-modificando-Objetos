import Paciente from "./Paciente.js"
import {pacientes} from "./data.js"

pacientes.forEach((paciente, i) => {
    const datosPaciente = new Paciente(
        paciente.nombre,
        paciente.edad,
        paciente.rut,
        paciente.diagnostico
    );
    datosPaciente.imprimirDatos("pacientes", i + 1);
});
