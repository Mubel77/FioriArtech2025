# 🚀 Cómo Ejecutar la Aplicación

## Opción 1: Modo Desarrollo (Recomendado)

```bash
# 1. Navegar al directorio del proyecto
cd clase_about_me

# 2. Instalar dependencias (primera vez)
npm install

# 3. Iniciar servidor de desarrollo
npm start
```

La aplicación se abrirá automáticamente en: **http://localhost:8080**

## Opción 2: Usando un Servidor Local

Si tienes Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre: **http://localhost:8000/webapp/index.html**

## Opción 3: Usando Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `webapp/index.html`
3. Selecciona "Open with Live Server"

## Estructura de Archivos Cargados

Cuando abres `index.html`, se cargan automáticamente:

```
index.html
  ↓ (carga Component.js)
Component.js
  ↓ (carga App.view.xml)
App.view.xml
  ├─ AboutHeader.view.xml
  ├─ PersonalBlock.view.xml
  └─ ProjectBlock.view.xml
  
Modelos:
  ├─ personal.json (datos)
  ├─ i18n.properties (textos)
  
Estilos:
  └─ style.css
```

## ✅ Verificación

Cuando la aplicación cargue correctamente, deberías ver:

1. ✅ Tu foto de perfil (o la imagen placeholder)
2. ✅ Tu nombre y título profesional
3. ✅ Botones para Email, GitHub, LinkedIn y Portfolio
4. ✅ Información de contacto
5. ✅ Enlaces profesionales

## 🐛 Solución de Problemas

### La página está en blanco
- Abre la consola del navegador (F12) y verifica si hay errores
- Asegúrate de que `personal.json` existe en `webapp/model/`

### Los estilos no se ven
- Verifica que `style.css` está en `webapp/css/`
- Recarga la página (Ctrl+Shift+R)

### Las imágenes no cargan
- Asegúrate de que `profile.jpg` existe en `webapp/img/`
- Verifica la ruta en `personal.json`

### Los botones no funcionan
- Abre la consola del navegador (F12)
- Verifica que no hay errores de JavaScript

## 📱 Prueba en Diferentes Dispositivos

La aplicación es responsive. Pruébala en:
- 💻 Desktop (pantalla completa)
- 📱 Mobile (redimensiona el navegador o abre en móvil)
- 📊 Tablet (redimensiona a 768px)

Para probar en móvil desde PC:
1. Abre `http://localhost:8080` en tu PC
2. Abre en tu móvil: `http://TU_IP_PC:8080`
3. (Reemplaza TU_IP_PC con tu IP local)

## 🎨 Personalizar Datos

Para cambiar tus datos:
1. Edita `webapp/model/personal.json`
2. Edita `webapp/i18n/i18n.properties` para textos
3. Reemplaza `webapp/img/profile.jpg` con tu foto
4. Guarda y recarga la página

---

¡Listo! Tu portfolio está funcionando. 🎉
