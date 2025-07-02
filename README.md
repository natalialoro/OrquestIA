# 🪑 Sistema de Reservas - Interfaz Moderna e Interactiva

Este proyecto es una interfaz moderna e interactiva para un sistema de reservas, desarrollado como parte de un reto técnico para un perfil de Desarrollador Frontend Junior. Se enfoca en una experiencia visual pulida, animaciones suaves, y una UI/UX inspirada en herramientas como **B0**, **Bolt** y **Dora**.

## 🚀 Tecnologías utilizadas

- **React 19**
- **Vite**
- **Tailwind CSS**
- **AOS (Animate On Scroll)**
- **React Router DOM**
- **Axios**
- **json-server (para simular el backend)**

---

## 📂 Estructura del proyecto

reserva-app/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── DashboardStaff.jsx # Vista del mesero con las reservas
│ │ ├── IngresoStaff.jsx # Pantalla de login del staff
│ │ ├── ModalResumenReserva.jsx # Modal de confirmación para el cliente
│ │ ├── PlanoRestaurante.jsx # Vista con las mesas seleccionables
│ │ └── ReservaCliente.jsx # Pantalla del cliente para hacer reservas
│ │
│ ├── App.jsx # Rutas principales
│ ├── index.css # Estilos base (Tailwind + AOS)
│ └── main.jsx # Punto de entrada
│
├── db.json # Base de datos simulada (json-server)
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md

yaml
Copiar
Editar

---

## ⚙️ Instalación y ejecución

### 1. Clona el repositorio o descomprime el archivo ZIP

```bash
cd reserva-app
2. Instala las dependencias
bash
Copiar
Editar
npm install
3. Inicia el backend simulado (json-server)
bash
Copiar
Editar
npx json-server --watch db.json --port 3000
4. En otra terminal, inicia la app
bash
Copiar
Editar
npm run dev
Abre tu navegador en http://localhost:5173

👨‍🍳 Cómo usar la app
El cliente entra a la ruta / para reservar una mesa: selecciona fecha, hora, nota adicional y mesa.

El modal muestra el resumen y permite confirmar la reserva.

El staff ingresa por /login, inicia sesión y accede a /dashboard donde ve las reservas existentes.

🧠 Inspiración visual
Este diseño fue desarrollado con un enfoque visual moderno basado en B0, Bolt y Dora, priorizando:

Animaciones suaves al hacer scroll (AOS)

Colores suaves y layouts con buen contraste

Interactividad clara y usable

✅ Estado del proyecto
✔ Funcionalidades completas
✔ Estilos responsive
✔ Separación de componentes
✔ Arquitectura limpia y mantenible

📬 Contacto
Hecho por Natalia Londoño como parte de un reto técnico para Frontend Junior.

