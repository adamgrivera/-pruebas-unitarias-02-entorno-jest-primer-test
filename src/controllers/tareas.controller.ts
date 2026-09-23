import { Request, Response } from "express";
import { obtenerTodasLasTareas, crearTarea } from "../services/tareas.service";

export function getTareas(req: Request, res: Response): void {
  res.json(obtenerTodasLasTareas());
}

export function postTarea(req: Request, res: Response): void {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    res.status(400).json({ mensaje: "Faltan campos obligatorios" });
    return;
  }

  const nueva = crearTarea({
    titulo,
    descripcion,
    completada: false,
  });

  res.status(201).json(nueva);
}