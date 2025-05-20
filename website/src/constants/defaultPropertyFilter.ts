// src/constants/defaultPropertyFilter.ts
import { Filtros } from '@/types/filters';

export const defaultPropertyFilter: Filtros = {
  cantidadporpagina: 10,
  pagina: 0,
  destinacion: '',
  municipio: '',
  barrio: '',
  clase: '',
  alcobas: undefined,
  banos: undefined,
  preciodesde: undefined,
  preciohasta: undefined,
  areadesde: undefined,
  areahasta: undefined,
  ascensor: false,
  piscina: false,
  unidadcerrada: false,
  parqueadero: false,
  destacado: false,
  inmueble_lujo: false,
  fecha_modificacion: '',
  order: 'consecutivo',
  type_order: 'desc',
};
