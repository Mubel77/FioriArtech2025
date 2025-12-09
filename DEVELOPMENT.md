# 📖 Documentación de Desarrollo - Clase About Me

## Guía de Arquitectura

Este documento describe la estructura y arquitectura de la aplicación Clase About Me.

## 🏗️ Arquitectura MVC

La aplicación sigue el patrón **Model-View-Controller (MVC)**:

### **Model** (`webapp/model/`)
- `personal.json` - Datos del perfil en formato JSON
- `models.js` - Modelos compartidos de la aplicación

### **View** (`webapp/view/`)
- `App.view.xml` - Vista principal que orquesta las subvistas
- `AboutHeader.view.xml` - Perfil y foto del usuario
- `PersonalBlock.view.xml` - Información de contacto
- `ProjectBlock.view.xml` - Enlaces profesionales

### **Controller** (`webapp/controller/`)
- `App.controller.js` - Controlador raíz, carga datos
- `AboutHeader.controller.js` - Lógica de interacción con botones sociales
- `PersonalBlock.controller.js` - Controlador de bloque personal
- `ProjectBlock.controller.js` - Controlador de bloque de proyectos

## 🔄 Flujo de Datos

```
App.controller.js (carga personal.json)
    ↓
    ├─→ AboutHeader.view.xml + AboutHeader.controller.js
    │   └─ Mostrar foto, nombre, título y botones sociales
    ├─→ PersonalBlock.view.xml + PersonalBlock.controller.js
    │   └─ Mostrar información de contacto
    └─→ ProjectBlock.view.xml + ProjectBlock.controller.js
        └─ Mostrar enlaces profesionales
```

## 📊 Binding de Datos

Todos los datos se vinculan mediante el modelo "personal":

```xml
<!-- Ejemplo de binding -->
<Text text="{personal>/nombre}"/>
<Image src="{personal>/foto}"/>
```

## 🌍 Internacionalización (i18n)

Los textos están externalizados en `webapp/i18n/i18n.properties`:

```xml
<!-- Uso en vistas -->
<Button text="{i18n>enviarCorreo}" press="onOpenEmail"/>
```

## 🎨 Sistema de Estilos

### Clases CSS Principales

- `.profileSection` - Contenedor principal
- `.profileHeader` - Encabezado con foto
- `.profileImage` - Imagen de perfil
- `.profileName` - Nombre del usuario
- `.profileTitle` - Título profesional
- `.socialToolbar` - Barra de botones sociales
- `.personalBlock` - Bloque de información personal
- `.projectBlock` - Bloque de proyectos
- `.blockTitle` - Títulos de sección
- `.linkItem` - Items de enlace

### Variables CSS (Tema)

```css
--primary-color: #1e3a8a;      /* Azul oscuro */
--secondary-color: #3b82f6;    /* Azul claro */
--accent-color: #10b981;       /* Verde */
--text-dark: #1f2937;
--text-light: #6b7280;
--background-light: #f9fafb;
--background-white: #ffffff;
```

## 🎬 Eventos y Métodos

### AboutHeader.controller.js

```javascript
onOpenEmail()      // Abre el cliente de email
onOpenPortfolio()  // Abre el portfolio
onOpenLinkedIn()   // Abre LinkedIn
onOpenGithub()     // Abre GitHub
```

## 📱 Responsive Design

La aplicación incluye media queries para:
- Desktop (> 768px)
- Tablet (768px - 480px)
- Mobile (< 480px)

## 🔌 Extensiones Recomendadas

### Agregar nueva sección

1. Crear vista en `webapp/view/NewSection.view.xml`:
```xml
<mvc:View controllerName="claseaboutme.controller.NewSection"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m">
    <VBox id="newSection" class="newSection">
        <items>
            <!-- Tu contenido aquí -->
        </items>
    </VBox>
</mvc:View>
```

2. Crear controlador en `webapp/controller/NewSection.controller.js`:
```javascript
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("claseaboutme.controller.NewSection", {
        onInit: function () {
            // Tu lógica aquí
        }
    });
});
```

3. Agregar la vista en `App.view.xml`:
```xml
<mvc:XMLView id="newSectionView" viewName="claseaboutme.view.NewSection"/>
```

### Agregar nuevo campo de datos

1. Editar `personal.json`:
```json
{
  "...": "...",
  "nuevoCampo": "valor"
}
```

2. Usar en la vista:
```xml
<Text text="{personal>/nuevoField}"/>
```

3. Si es necesario, agregar etiqueta i18n en `i18n.properties`:
```properties
nuevoField=Etiqueta para nuevo campo
```

## 🚀 Build y Deployment

### Desarrollo
```bash
npm start
```

### Producción
```bash
npm run build
```

### Archivos generados
- `dist/` - Código compilado optimizado
- `dist/resources/` - Recursos estáticos

## 🧪 Testing (Futura Implementación)

La estructura soporta tests de unidad:
```bash
npm test
```

Tests están en `webapp/test/`:
- `unit/` - Tests unitarios
- `integration/` - Tests de integración

## 📝 Convenciones de Código

### Nombres de archivos
- Controladores: `NameOfController.controller.js`
- Vistas: `NameOfView.view.xml`
- Modelos: `models.json` o `models.js`

### Nombres de clases CSS
- Usar kebab-case: `.profile-section`
- Usar prefijo por sección: `.personal-block`, `.project-block`

### Nombres de métodos
- Eventos: `on` + NombreAccion: `onOpenEmail()`
- Métodos privados: `_` + nombreMetodo: `_loadData()`

## 📚 Recursos Útiles

- [SAP UI5 Documentation](https://openui5.hana.ondemand.com/)
- [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-ios/)
- [JSON Model](https://openui5.hana.ondemand.com/topic/96804e3315ff440aa0424e9bc23f45fb)
- [Binding Syntax](https://openui5.hana.ondemand.com/topic/68b9644c3e32419faadc3078378a18fb)

## 🐛 Troubleshooting

### Problema: No se muestran los datos
**Solución**: Verificar que `personal.json` existe y está bien formado. Revisar la consola del navegador.

### Problema: Estilos no se aplican
**Solución**: Asegurar que `style.css` está referenciado en `manifest.json` y que las clases CSS coinciden.

### Problema: Los enlaces no funcionan
**Solución**: Verificar que las URLs en `personal.json` son correctas y válidas.

---

**Última actualización**: Diciembre 2025
