// src/app/not-found.tsx

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Página no encontrada</h2>
        <p className="text-gray-500 mb-6">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Volver al inicio
        </a>
      </div>
    )
  }