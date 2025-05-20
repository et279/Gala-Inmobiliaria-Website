// src/services/api/propertyService.ts
import api from './axiosInstance';
import { buildUrl } from './utils';
import { Property } from '@/types/Properties';
import { Filtros } from '@/types/filters';

export const getProperties = async (filtros: Filtros): Promise<Property[]> => {
    const url = buildUrl('/inmuebles/consultar_inmuebles');
  const response = await api.post<Property[]>(url, filtros);
  return response.data;
};
