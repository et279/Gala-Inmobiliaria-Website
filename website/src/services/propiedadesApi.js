import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_NOMBRE_EMPRESA}`,
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

/**
 * Consulta la lista de propiedades con filtros opcionales.
 * @param {Object} filtros - Filtros de búsqueda (página, cantidad, etc).
 * @returns {Promise<Object[]>} Lista de propiedades
 */
export const consultarInmuebles = async (filtros = {}) => {
  try {
    const body = {
      cantidadporpagina: filtros.cantidadporpagina || 10,
      pagina: filtros.pagina || 1,
      destinacion: filtros.destinacion || null,
      municipio: filtros.municipio || null,
      barrio: filtros.barrio || null,
      clase: filtros.clase || null,
      alcobas: filtros.alcobas || null,
      banos: filtros.banos || null,
      preciodesde: filtros.preciodesde || null,
      preciohasta: filtros.preciohasta || null,
      destacado: filtros.destacado || null,
      order: filtros.order || 'consecutivo',
      type_order: filtros.type_order || 'desc'
    };

    const response = await axiosInstance.post('', body);
    return response.data;
  } catch (error) {
    console.error('Error al consultar inmuebles:', error?.response?.data || error.message);
    throw error;
  }
};
