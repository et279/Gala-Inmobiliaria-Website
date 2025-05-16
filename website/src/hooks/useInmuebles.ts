import { useState, useEffect } from 'react';
import { consultarInmuebles } from '@/services/propiedadesApi';
import { Inmueble, FiltroInmuebles } from '@/types/inmueble';

export function useInmuebles(filtros: FiltroInmuebles) {
  const [data, setData] = useState<Inmueble[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    consultarInmuebles(filtros)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [JSON.stringify(filtros)]); // evita re-render infinito

  return { data, loading, error };
}
