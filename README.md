# 🏡 Gala Inmobiliaria – Web Platform (MVP)

Plataforma web moderna para la presentación de propiedades inmobiliarias, construida con Next.js y consumo de API externa. Optimizada para SEO, rendimiento y escalabilidad futura con integración a WordPress headless.

---

## 🚀 Tecnologías Utilizadas

- **Next.js** – Framework de React con soporte SSR/SSG.
- **Tailwind CSS** – Para estilos rápidos y responsivos.
- **Axios** – Consumo de API externa de propiedades.
- **Google Analytics 4 + Tag Manager** – Métricas y seguimiento de interacción.
- **Vercel** – Hosting para frontend.

---

## ⚙️ Requisitos Previos

- Node.js >= 18
- NPM o Yarn
- Cuenta de Google Analytics y Tag Manager (ya configuradas)

---

## 🧱 Instalación local

```bash
git clone https://github.com/[TU_USUARIO]/gala-inmobiliaria-Website.git
cd gala-inmobiliaria-Website
npm install
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
/pages
  index.js               # Home
  contacto.js            # Página de contacto
  /propiedades
    index.js             # Listado de propiedades
    [id].js              # Detalle de propiedad
/components
  Layout.js
  SearchBar.js
  PropertyCard.js
  PropertyDetail.js
/services
  propiedadesAPI.js      # Lógica de conexión con la API externa
/utils
  seoConfig.js           # Configuración SEO dinámica
/public
  /assets                # Logos, íconos, imágenes
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
- Integración con Google Analytics 4
- Google Tag Manager configurado en `pages/_document.js`

---

## 📦 Roadmap

- ✅ MVP funcional sin login
- 🔄 Integración futura con WordPress Headless
- 🔄 Módulos adicionales (IA, testimonios, zonas)
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

**Fabián Beltrán** – [LinkedIn](https://www.linkedin.com/) – Web Designer & Developer | React & WordPress

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
