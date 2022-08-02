import * as data from "./data";
import { COLORS } from "./theme";

export const CARRERAS = [
  {
    id: "medicina",
    link: "https://www.fi.uba.ar/grado/carreras/lic-en-analisis-de-sistemas/plan-de-estudios",
    graph: data.medicina,
    nombre: "Medicina",
    nombrecorto: "Medicina",
    creditos: {
      total: 214,
      obligatorias: 136,
      electivas: 28,
      checkbox: [
        {
          nombre: "Prueba de nivel de idioma inglés",
          nombrecorto: "Inglés",
          bg: COLORS.enfinal[50],
          color: "enfinal",
        },
      ],
      materias: [
        {
          id: "95.61",
          nombrecorto: "TPP",
          bg: COLORS.findecarrera[50],
          color: "findecarrera",
        },
      ],
    },
  }
];

export default CARRERAS;
