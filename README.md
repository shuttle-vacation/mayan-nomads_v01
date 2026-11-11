# Mayan Nomads by Shuttle Vacation

Aplicación web Node.js de Mayan Nomads, marca de experiencias y descubrimiento vinculada a Shuttle Vacation.

## Identidad visual
- Estructura de navegación y secciones inspirada en la experiencia web de Shuttle Vacation, conservando el contenido propio de Mayan Nomads.
- Paleta: negro carbón, marfil, café oscuro y naranja quemado; sin aqua ni amarillo.
- Tipografías: Bebas Neue para titulares y Montserrat para texto e interfaz.

## Stack
- Node.js 20 o superior.
- Express 5 como servidor HTTP.
- HTML semántico, CSS y JavaScript vanilla para la interfaz.
- Adaptable a móvil, tablet y escritorio.
- El formulario prepara una consulta y abre WhatsApp; no confirma reservas ni almacena datos en este sitio.

## Ejecutar localmente
```bash
npm install
npm start
```

La aplicación escucha en el puerto indicado por `PORT` (por defecto 3000). Incluye un endpoint de estado en `/health`.

## Estructura
- `server.js`: servidor Express, publicación de archivos estáticos y endpoint de salud.
- `package.json`: metadatos, dependencia y comando de inicio.
- `index.html`: página principal, experiencias, destinos, preguntas frecuentes y formulario.
- `styles.css`: sistema visual responsive.
- `script.js`: navegación móvil, filtros y envío de consulta a WhatsApp.
- `privacy.html`: aviso informativo de privacidad.
- `404.html`: página de recurso no encontrado.
- `favicon.svg`: icono provisional tipográfico.

## Despliegue en Hostinger
- Tipo de aplicación: Node.js.
- Versión de Node.js: 20 o superior.
- Rama: `main`.
- Directorio de aplicación: raíz del repositorio.
- Comando de instalación: `npm install` (o el automático de Hostinger).
- Comando de inicio: `npm start`.
- Variable de puerto: usar el puerto asignado por Hostinger mediante `PORT`; no fijarlo manualmente.

No se requiere comando de build porque la interfaz usa HTML, CSS y JavaScript vanilla.

## Configuración comercial pendiente antes de anunciar ventas
1. Validar el catálogo real de tours, operadores, inclusiones, restricciones y disponibilidad.
2. Definir tarifas, moneda, impuestos, políticas de cancelación y métodos de pago.
3. Completar el aviso de privacidad con la identidad legal y domicilio del responsable.
4. Sustituir imágenes de referencia por fotografía autorizada de experiencias y destinos reales.
5. Confirmar que el número de WhatsApp y el proceso de atención siguen siendo los oficiales.
6. Conectar un proveedor de reservaciones/pagos si se requiere confirmación automática.

## Contacto configurado
WhatsApp de Shuttle Vacation: +52 998 118 2783.

El formulario abre una conversación con un mensaje prellenado. La persona debe revisar y enviar ese mensaje desde WhatsApp. Una consulta no equivale a una reservación confirmada.
