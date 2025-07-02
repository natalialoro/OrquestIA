import React, { useState } from "react";
import { mesas } from "../data/mockData";
import { motion } from "framer-motion";
import ModalConfirmacion from "../components/ModalConfirmacion";

export default function Cliente() {
  const [fecha, setFecha] = useState("");
  const [huespedes, setHuespedes] = useState(1);
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const handleSeleccionMesa = (id) => {
    setMesaSeleccionada(id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Reserva tu mesa
      </motion.h1>

      {/* Formulario inicial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Número de huéspedes</label>
          <input
            type="number"
            min="1"
            value={huespedes}
            onChange={(e) => setHuespedes(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Mostrar plano de mesas solo si hay más de 6 huéspedes */}
      {huespedes > 6 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Selecciona una mesa:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mesas.map((mesa) => {
              const esSeleccionada = mesa.id === mesaSeleccionada;
              const esInactiva = mesa.estado !== "disponible";

              return (
                <button
                  key={mesa.id}
                  onClick={() => !esInactiva && handleSeleccionMesa(mesa.id)}
                  disabled={esInactiva}
                  className={`p-4 rounded border-2 transition-all duration-200 text-center ${
                    esInactiva
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : esSeleccionada
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <p className="font-medium">{mesa.nombre}</p>
                  <p className="text-sm">Capacidad: {mesa.capacidad}</p>
                  <p
                    className={`text-xs mt-1 ${
                      mesa.estado === "ocupada"
                        ? "text-red-600"
                        : mesa.estado === "reservada"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {mesa.estado}
                  </p>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
