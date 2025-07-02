import React from "react";
import { mesas } from "../data/mockData";

export default function Mesero() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Gestión de Mesas</h1>
      <div className="grid grid-cols-3 gap-4">
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            className={`p-4 rounded text-center border-2
              ${mesa.estado === "disponible" ? "border-green-500" : mesa.estado === "reservada" ? "border-yellow-500" : "border-red-500"}`}
          >
            <p className="font-semibold">{mesa.nombre}</p>
            <p className="text-sm text-gray-600">Estado: {mesa.estado}</p>
          </div>
        ))}
      </div>
    </div>
  );
}