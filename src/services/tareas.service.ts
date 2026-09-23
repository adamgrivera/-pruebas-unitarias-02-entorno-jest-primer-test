type Tarea = {
  id: number;
  titulo: string;
  completada: boolean;
  descripcion: string;
};

let tareas: Tarea[] = [
  {
    id: 1,
    titulo: "Estudiar pruebas",
    completada: false,
    descripcion: "Estudiar pruebas unitarias usando Jest",
  },
  {
    id: 2,
    titulo: "Hacer ejercicio",
    completada: true,
    descripcion: "Correr 30 minutos a 10km/h",
  },
];

// Esta función encapsula la lógica para obtener tareas
export function obtenerTodasLasTareas() {
  return tareas;
}

// Esta función encapsula la lógica para crear una nueva tarea
export function crearTarea(data: Omit<Tarea, "id">): Tarea {
  const nueva = {
    id: tareas.length + 1,
    ...data,
  };
  tareas.push(nueva);
  return nueva;
}

// Usamos esta función para pruebas unitarias
export function limpiarTareas() {
  tareas = [];
}