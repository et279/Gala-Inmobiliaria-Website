# 🏡 Gala Inmobiliaria – Web Platform

Plataforma web moderna para la presentación de propiedades inmobiliarias, construida con Next.js y consumo de API externa. Optimizada para SEO, rendimiento y escalabilidad futura con integración a WordPress headless.

---

## 🚀 Tecnologías Utilizadas

- **Next.js** – Framework de React con soporte SSR/SSG.
- **Axios** – Consumo de API externa de propiedades.
- **Google Analytics 4 + Tag Manager** – Métricas y seguimiento de interacción.
- **Vercel** – Hosting para frontend.
- **React Icons** – Iconos de React.
- **Next SEO** – SEO dinámico.
- **TypeScript** – Tipado estático.
- **ESLint** – Linting.
- **Prettier** – Formateo de código.
- **React GA4** – Métricas y seguimiento de interacción.
---

## ⚙️ Requisitos Previos

- Node.js >= 18
- NPM o Yarn
- Cuenta de Google Analytics y Tag Manager (ya configuradas)

---

## 🧱 Instalación local

```bash
git clone https://github.com/et279/Gala-Inmobiliaria-Website.git
cd Gala-Inmobiliaria-Website
npm install
cd website
```

### Crear archivo `.env.local`

```env
NEXT_PUBLIC_API_URL=https://api.tercero.com/propiedades
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

---

## 🧭 Estructura del proyecto

```
/public
  /assets             # Imágenes, íconos, logos estáticos

/src
├── /app              # Sistema de rutas App Router
│   ├── page.tsx             # Página Home
│   ├── layout.tsx           # Layout global (navbar/footer)
│   ├── globals.css          # Estilos globales
│
│   ├── contacto/
│   │   └── page.tsx         # Página de contacto
│
│   ├── propiedades/
│   │   ├── page.tsx         # Página de resultados (listado)
│   │   └── [id]/
│   │       └── page.tsx     # Detalle de propiedad
│
│   └── not-found.tsx        # Página 404 personalizada (opcional)

├── /components        # Componentes reutilizables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SearchBar.tsx
│   ├── PropertyCard.tsx
│   ├── PropertyDetail.tsx
│   └── ContactForm.tsx 
│   └── SeoProvider.tsx 

├── /services          # Lógica de conexión a APIs externas
│   └── propiedadesAPI.ts

├── /utils             # Utilidades generales
│   └── formatPrice.ts
│   └── seoConfig.ts

├── /lib               # Configuraciones externas o librerías (ej. analytics)
│   ├── analytics.ts   # Google Analytics setup
│   ├── tagManager.ts  # Google Tag Manager init
│   └── tagManagerNoScript.tsx  # Google Tag Manager NoScript

├── /types             # Interfaces TypeScript
│   └── propiedad.ts

├── /hooks             # Custom hooks
│   └── useFetch.ts    # (si necesitas manejo de carga, error, etc.)

├── /styles            # Estilos adicionales (opcional)
│   └── components.css
│   └── theme.css
│   └── responsive.css


```

---

## 🧪 Scripts

```bash
npm run dev       # Iniciar servidor en desarrollo
npm run build     # Compilar el proyecto para producción
npm start         # Iniciar servidor en modo producción
```

---

## 📈 SEO y Tracking

- SEO dinámico con `next-seo`
- Integración con Google Analytics 4 en `src/lib/Analytics.tsx`
- Google Tag Manager configurado en `src/lib/TagManager.tsx`
- Google Tag Manager NoScript configurado en `src/lib/TagManagerNoScript.tsx`

---

## 📦 Roadmap

- ✅ MVP funcional (buscador de propiedades, listado de propiedades, detalle de propiedad, contacto, nosotros, header, footer, inicio, mapa, boton pagos).
- 🔄 Integración futura con WordPress Headless
- 🔄 Módulos adicionales (IA, testimonios, zonas, generacion de PDFs, chatbots, etc).
- 🔄 Mejoras visuales y UX

---

## 🤝 Contribuciones

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nombre`)
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva función'`)
4. Sube la rama (`git push origin feature/nombre`)
5. Abre un Pull Request

---

## 🧑‍💻 Autor

**Fabián Beltrán** – [LinkedIn](https://www.linkedin.com/in/fabian-beltran-/) – Web Designer & Developer | React & WordPress

Correo: [fabianbeltranrojas279@gmail.com](mailto:fabianbeltranrojas279@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
