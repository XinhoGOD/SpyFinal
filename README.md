# EspíaLocal - Inteligencia Competitiva para Negocios Locales

EspíaLocal es una plataforma que ofrece dashboards de inteligencia competitiva para propietarios de negocios locales, analizando la experiencia de usuario de sus competidores basándose en reseñas públicas de Yelp y Google Maps.

## Características

- Análisis de reseñas de competidores
- Dashboards mensuales personalizados
- Insights sobre experiencia de usuario
- Identificación de puntos fuertes y débiles
- Planes adaptados a diferentes necesidades

## Tecnologías Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Requisitos Previos

- Node.js 18.0.0 o superior
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/espia-local.git
cd espia-local
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
espia-local/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 