import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-8 rounded shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Usuario"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}