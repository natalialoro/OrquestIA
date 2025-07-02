import React from "react";

export default function ModalConfirmacion({ fecha, huespedes, mesa, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Confirmar Reserva</h2>
        <p className="mb-2">📅 Fecha: <strong>{fecha}</strong></p>
        <p className="mb-2">👥 Huéspedes: <strong>{huespedes}</strong></p>
        <p className="mb-4">🍽️ Mesa seleccionada: <strong>{mesa.nombre}</strong></p>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
