export interface Filtros {
    cantidadporpagina: number;
    pagina: number;
    destinacion?: string;
    municipio?: string;
    barrio?: string;
    clase?: string;
    alcobas?: number;
    banos?: number;
    preciodesde?: number;
    preciohasta?: number;
    areadesde?: number;
    areahasta?: number;
    ascensor?: boolean;
    piscina?: boolean;
    unidadcerrada?: boolean;
    parqueadero?: boolean;
    destacado?: boolean;
    inmueble_lujo?: boolean;
    fecha_modificacion?: string;
    order?: string;
    type_order?: string;
  }