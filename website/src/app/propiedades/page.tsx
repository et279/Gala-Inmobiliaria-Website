import { useInmuebles } from '@/hooks/useInmuebles';

export default function PropiedadesPage() {
  const { data, loading, error } = useInmuebles({
    municipio: 'Medellín',
    clase: 'Apartamento',
    cantidadporpagina: 12,
    pagina: 1
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Propiedades en Medellín</h1>
      <ul>
        {data.map((p, i) => (
          <li key={i}>
            {p.clase} - {p.direccion} - {p.precio} COP
          </li>
        ))}
      </ul>
    </div>
  );
}
