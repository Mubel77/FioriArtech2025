# 🎨 Guía Visual de la Aplicación

## Estructura Visual

```
┌─────────────────────────────────────────────────┐
│   Mauricio Abel Cuellar - Portfolio             │
│   (Título en navegador)                         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│  [FOTO]    Mauricio Abel Cuellar               │
│  (140px)   Desarrollador Backend - SAP Fiori   │
│            Python / n8n                        │
│                                                 │
├─────────────────────────────────────────────────┤
│  [📧 Enviar Correo] [💻 GitHub] [💼 LinkedIn] │
│  [🌐 Ver Portfolio]                            │
├─────────────────────────────────────────────────┤
│                                                 │
│  Información de Contacto                       │
│  ────────────────────────                      │
│  Nombre: Mauricio Abel Cuellar                │
│  Título: Desarrollador Backend...             │
│  Correo: mauricio.cuellar@gmail.com           │
│  GitHub: https://github.com/Mubel77           │
│  LinkedIn: https://linkedin.com/in/...        │
│  Portfolio: https://tu-portfolio.com          │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Enlaces Profesionales                         │
│  ──────────────────────                        │
│  [💻] GitHub - Ver Repositorio                │
│  [💼] LinkedIn - Conectar                     │
│  [🌐] Portfolio - Ver Proyectos               │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Flujo de Carga

```
1. Navegador abre index.html
   ↓
2. Se carga SAP UI5 framework
   ↓
3. Se inicializa Component.js
   ↓
4. Se carga personal.json (datos)
   ↓
5. Se carga i18n.properties (textos)
   ↓
6. Se renderiza App.view.xml
   ↓
7. Se cargan las 3 subvistas:
   - AboutHeader (foto, nombre, botones)
   - PersonalBlock (información de contacto)
   - ProjectBlock (enlaces profesionales)
   ↓
8. Se aplican estilos de style.css
   ↓
9. ¡Aplicación lista! ✅
```

## Componentes en Pantalla

### 📸 AboutHeader (Parte Superior)
- **Foto**: Imagen cuadrada con borde azul (140x140px)
- **Nombre**: "Mauricio Abel Cuellar" (H1, azul oscuro)
- **Título**: "Desarrollador Backend..." (H3, azul claro)
- **Botones**: 
  - 📧 Email (Verde, destacado)
  - 💻 GitHub (Negro)
  - 💼 LinkedIn (Azul LinkedIn)
  - 🌐 Portfolio (Azul claro)

### 📋 PersonalBlock (Centro)
- **Título**: "Información de Contacto"
- **Contenido**:
  - Nombre
  - Título profesional
  - Correo electrónico
  - GitHub (link)
  - LinkedIn (link)
  - Portfolio (link)

### 🔗 ProjectBlock (Abajo)
- **Título**: "Enlaces Profesionales"
- **Items**:
  - 💻 GitHub
  - 💼 LinkedIn
  - 🌐 Portfolio
  - (Todos abren en nueva pestaña)

## Tema de Colores

```css
┌──────────────────────────────────────┐
│ Colores Principales                 │
├──────────────────────────────────────┤
│ Azul Oscuro      #1e3a8a             │
│ Azul Claro       #3b82f6             │
│ Verde (Acento)   #10b981             │
│ Texto Oscuro     #1f2937             │
│ Texto Claro      #6b7280             │
│ Fondo Claro      #f9fafb             │
│ Blanco           #ffffff             │
└──────────────────────────────────────┘

Botones Especiales:
├─ Email:    Verde (#10b981) - Destacado
├─ GitHub:   Negro (#333)
├─ LinkedIn: Azul LinkedIn (#0077b5)
└─ Portfolio:Azul Claro (#3b82f6)
```

## Responsividad

### 🖥️ Desktop (> 768px)
- Diseño completo
- Foto y detalles en la misma fila
- Botones en una fila

### 📱 Tablet (480px - 768px)
- Foto reducida
- Detalles centrados
- Botones pueden fluir

### 📱 Mobile (< 480px)
- Foto más pequeña (100x100px)
- Todo centrado
- Botones en pantalla completa (stack vertical)
- Letras más pequeñas

## Animaciones

```
Al cargar la página:
├─ ProfileSection:   Desliza de arriba (300ms)
├─ PersonalBlock:    Sube desde abajo (300ms)
└─ ProjectBlock:     Sube desde abajo (500ms)

Al hacer hover:
├─ Botones:          Se elevan 2px con sombra
├─ Links:            Subrayado y cambio de color
└─ Items:            Movimiento lateral y sombra
```

## Funcionalidades Interactivas

### 📧 Botón Email
```
Click → Abre cliente de correo predeterminado
```

### 💻 Botón GitHub
```
Click → Abre https://github.com/Mubel77 en nueva pestaña
```

### 💼 Botón LinkedIn
```
Click → Abre LinkedIn en nueva pestaña
```

### 🌐 Botón Portfolio
```
Click → Abre https://tu-portfolio.com en nueva pestaña
```

### 🔗 Enlaces en Bloques
```
Click → Abre el link en nueva pestaña
```

## Textos (Multiidioma i18n)

Todos los textos están externalizados:
```properties
appTitle=Mauricio Abel Cuellar - Portfolio
appDescription=Desarrollador Backend...
title=Mi Perfil Profesional
nombre=Nombre
titulo=Título Profesional
correo=Correo Electrónico
github=GitHub
linkedin=LinkedIn
portfolio=Portfolio
enviarCorreo=Enviar Correo
visitarGithub=Visitar GitHub
visitarLinkedIn=Visitar LinkedIn
visitarPortfolio=Ver Portfolio
```

## Accesibilidad

✅ Navegación por teclado
✅ Labels descriptivos
✅ Contraste de colores WCAG AA
✅ ARIA labels donde es necesario
✅ Alt text para imágenes

---

**¡Tu portfolio está completo y listo para usar!** 🎉
