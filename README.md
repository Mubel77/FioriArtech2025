# Mauricio Abel Cuellar - Portfolio

Una aplicación SAP Fiori moderna y responsiva que muestra el perfil profesional y enlaces de contacto.

## 🎯 Características

- ✨ Diseño moderno y responsivo
- 📱 Compatible con dispositivos móviles, tablets y desktop
- 🌍 Soporte multiidioma con i18n
- 🎨 Estilos CSS profesionales con animaciones
- 📧 Enlaces funcionales para email, GitHub, LinkedIn y Portfolio
- ♿ Accesible y usable

## 📁 Estructura del Proyecto

```
clase_about_me/
├── webapp/
│   ├── controller/
│   │   ├── App.controller.js           # Controlador principal
│   │   ├── AboutHeader.controller.js   # Controlador del encabezado
│   │   ├── PersonalBlock.controller.js # Controlador del bloque personal
│   │   └── ProjectBlock.controller.js  # Controlador del bloque de proyectos
│   ├── view/
│   │   ├── App.view.xml                # Vista principal
│   │   ├── AboutHeader.view.xml        # Vista del encabezado con perfil
│   │   ├── PersonalBlock.view.xml      # Vista de información personal
│   │   └── ProjectBlock.view.xml       # Vista de enlaces profesionales
│   ├── model/
│   │   ├── personal.json               # Datos personales
│   │   └── models.js                   # Modelos de datos
│   ├── i18n/
│   │   └── i18n.properties             # Textos multiidioma
│   ├── css/
│   │   └── style.css                   # Estilos personalizados
│   ├── img/
│   │   └── profile.jpg                 # Imagen de perfil
│   ├── manifest.json                   # Configuración de la app
│   ├── Component.js                    # Componente raíz
│   └── index.html                      # Página principal
├── package.json                        # Dependencias del proyecto
├── ui5.yaml                           # Configuración de UI5
└── README.md                          # Este archivo
```

## 🚀 Inicio Rápido

### Requisitos Previos

1. Node.js LTS (versión 16 o superior)
2. npm (incluido con Node.js)

### Instalación

```bash
# 1. Clonar o descargar el repositorio
cd clase_about_me

# 2. Instalar dependencias
npm install

# 3. Iniciar la aplicación
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:8080`

## 📝 Modificar los Datos Personales

Edita el archivo `webapp/model/personal.json` con tu información:

```json
{
  "nombre": "Tu Nombre Completo",
  "titulo": "Tu Título Profesional",
  "correo": "tu.correo@ejemplo.com",
  "github": "https://github.com/tuusuario",
  "linkedin": "https://linkedin.com/in/tuusuario",
  "portfolio": "https://tu-portfolio.com",
  "foto": "img/profile.jpg"
}
```

## 🌐 Textos Multiidioma

Modifica `webapp/i18n/i18n.properties` para cambiar los textos:

```properties
appTitle=Tu Título de App
appDescription=Tu descripción
nombre=Nombre
titulo=Título
# ... etc
```

## 🖼️ Imagen de Perfil

1. Reemplaza `webapp/img/profile.jpg` con tu foto de perfil
2. Asegúrate de que la imagen sea cuadrada para mejor presentación
3. Recomendado: 200x200px o superior

## 🎨 Personalizar Estilos

Los colores principales están definidos en `webapp/css/style.css`:

```css
:root {
  --primary-color: #1e3a8a;      /* Azul oscuro */
  --secondary-color: #3b82f6;    /* Azul claro */
  --accent-color: #10b981;       /* Verde */
  --text-dark: #1f2937;          /* Texto oscuro */
  --text-light: #6b7280;         /* Texto claro */
}
```

Modifica estos valores para cambiar el esquema de colores.

## 📱 Responsividad

La aplicación es totalmente responsiva:
- **Desktop**: Presentación completa con todos los detalles
- **Tablet**: Diseño adaptado a pantallas medianas
- **Mobile**: Diseño optimizado para pantallas pequeñas

## 🔗 Enlaces Funcionales

- 📧 **Email**: Abre el cliente de correo predeterminado
- 🐙 **GitHub**: Abre tu perfil de GitHub
- 💼 **LinkedIn**: Abre tu perfil de LinkedIn
- 🌐 **Portfolio**: Abre tu sitio de portfolio

## 🛠️ Comandos Disponibles

```bash
# Iniciar en modo desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar tests (si están disponibles)
npm test

# Linter y validación
npm run lint
```

## 📚 Tecnologías Utilizadas

- **SAP UI5 1.143.0** - Framework de UI
- **SAPUI5 Controls** - Componentes visuales
- **CSS3** - Estilos avanzados
- **JSON** - Almacenamiento de datos
- **i18n** - Internacionalización

## ♿ Accesibilidad

La aplicación cumple con estándares de accesibilidad:
- Navegación por teclado
- Labels y descripciones adecuadas
- Contraste de colores optimizado
- ARIA labels donde es necesario

## 📄 Licencia

Este proyecto es de uso educativo y profesional.

## 👤 Información del Desarrollador

**Mauricio Abel Cuellar**
- 🧑‍💻 Desarrollador Backend - SAP Fiori / Python / n8n
- 📧 mauricio.cuellar@gmail.com
- 🐙 GitHub: https://github.com/Mubel77
- 💼 LinkedIn: https://www.linkedin.com/in/mauriciocuellar/

---

**Última actualización**: Diciembre 2025



