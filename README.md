# El Racó - FIB [iOS]   <img src="https://i.gyazo.com/22233822cd247c8de66696a85dfec1f3.png" alt="Girl in a jacket" width="48" height="28">
[Versión para Android](https://github.com/joan3pastor/el-raco-fib)

-----------------

## Índice
- [Acerca de](#acerca-de)
- [No te pierdas! - Documentación de la App](#no-te-pierdas---documentación-de-la-app)
- [Configuración de entorno](#configuración-de-entorno)
- [Ejecuta en emulador](#ejecuta-en-emulador)
- [Testing](#testing)
- [Problemas comunes](#problemas-comunes)
- [Gestión de versiones y metodología del repositorio](#gestión-de-versiones-y-metodología-del-repositorio)
- [Colaborar y distribución](#colaborar-y-distribución)
- [Recursos útiles](#recursos-útiles)

## Acerca de
**El Racó - FIB** es una app móvil no oficial para estudiantes de la [FIB](https://www.fib.upc.edu/es), la cual, permite el acceso a la intranet de la facultad interaccionando con la [API de la FIB](https://api.fib.upc.edu/v2/o/) y ofrece funcionalidades adicionales a los estudiantes.

Entre todas sus funcionalidades, destacamos las siguientes:
- Visualizar el horario del estudiante
- Consultar avisos de asignaturas inscritas y recibir notificaciones de actualizaciones
- Consultar las noticias de la FIB y de la UPC
- Consultar las guías docentes de las asignaturas y gestionar las notas académicas
- Consultar próximos eventos incluyendo días festivos y exámenes
- Visualizar la disponibilidad de los laboratorios y encontrar aulas libres
- Consulta y reserva salas de estudio de la biblioteca BRGF

Esta aplicación está construida con [React Native](https://reactnative.dev/). Actualmente, la app no está publicada en la App Store. Sientete libre a explorar el repositorio, subir *pull requests* o publicar esta aplicación.

## No te pierdas! - Documentación de la App
Encuentra documentación detallada de la aplicación [**aquí**](https://github.com/joan3pastor/el-raco-fib-ios/blob/master/documentacion.md), incluyendo:
- Rutas del directorio
- Diagrama de flujo de componentes
- Capa de datos
- Navegación
- Token management
- Actualizar versión de la aplicación
- Boilerplates
- Scripts

## Configuración de entorno
- Instala Node y Watchman con Homebrew mediante los siguientes comandos:
  - `> brew install node`
  - `> brew install watchman`
- Instala Xcode (versión 9.4 o superior) desde la App Store de OSX. 
- Necesitarás instalar Xcode Command Line Tools. Para ello, abre Xcode, navega a `Preferences...` -> `Locations` e instala Xcode Command Line Tools selecionando la versión más reciente del menú desplegable de `Command Line Tools`.
- Instala un emulador iOS abriendo Xcode, navegando a `Preferences...` -> `Components` y seleccionando el dispositivo deseado.
- Instala Cocoapods mediante Ruby utilizando `> sudo gem install cocoapods`.
- Instala el paquete de React Native CLI con el siguiente comando `> npm install -g react-native-cli`.
- Clona el repositorio de la aplicación con `> git clone https://github.com/joan3pastor/pruebaReadme.git`.
- Instala las dependencias ejecutando `> npm install` dentro del repositorio.
- Enlaza las librerias que contengan código nativo siguiento [esta guía](https://reactnative.dev/docs/linking-libraries-ios).

Más detalles en la guía de React Native, [***Setting up the development environment***](https://reactnative.dev/docs/environment-setup).

## Ejecuta en emulador
- Abre un emulador iOS desde Xcode.
- Ejecuta `> npm run start` para abrir una instancia del Metro Server.
- Compila y ejecuta la aplicación con `> npm run ios-run-debug` o `> react-native run-ios --simulator="iPhone SE"` si deseas utilizar un dispositivo en concreto.
- Puedes utilizar `> xcrun simctl list devices` para obtener una lista de dispositivos disponibles.
- Presiona `⌘R` en el emulador para actualizar y aplicar cambios.

## Testing
Por tal de garantizar la calidad del código, este proyecto incorpora tests unitarios y de integración (a nivel *vista*). Sientete libre de crear tus propios tests.

Tecnologías utilizadas:
- Jest ([Docs](https://jestjs.io/docs/en/tutorial-react-native))
- Enzyme ([Docs](https://enzymejs.github.io/enzyme/docs/api/))

Una vez publicada la aplicación en la App Store, se actualizará esta entrada con un link para inscribirse como *tester*.

## Problemas comunes
### Errores al instalar un paquete de NPM o GIT no funciona correctamente
Algunas dependencias en `node_modules/` contienen carpetas `.git` que pueden interferir en la intalación de un nuevo módulo o del uso de GIT. Por tal de arreglar el problema, ejecuta el siguiente script:  
```
> npm run nm-remove-git
```
### Errores al alternar entre versiones Debug y Release de la aplicación
Cada versión de la aplicación es considerada una aplicación diferente por el sistema operativo pero ambas comparten el mismo identificador (*com.fibupc*). Al intentar ejecutar otra versión, se producirá un error de compilación. Por tal de arreglar este error, simplemente elimina la aplicación instalada en el emulador o dispositivo. 

## Gestión de versiones y metodología del repositorio
### Nombrar versiones
Por tal de elegir un nombre de versión, se ha de consultar las modificaciones que ésta incorpora. Por regla general:
- `v1.X`: Incorpora una nueva funcionalidad.
- `v1.X.X`: Soluciona errores de la versión previa.

### Ramas del repositorio remoto
Por tal de manejar el desarrollo de versiones, se sigue la siguiente nomenclatura:
- `master`: Rama principal actualizada con todas las versiones publicadas.
- `v.1.X`: Rama en desarrollo.

Consulta el grafo de ramas de este repositorio desde el siguiente [**enlace**](https://github.com/joan3pastor/el-raco-fib-ios/network).

Al trabajar en una subrama, procura sincronizar el repositorio remoto lo más frecuentemente posible para reducir los posibles conflictos.

### Fusionar versiones con rama principal
Una vez finalizada el ciclo de desarrollo de una versión y está lista para ser publicada, sigue los pasos de [**este apartado**](https://github.com/joan3pastor/el-raco-fib-ios/blob/master/documentacion.md#actualizar-versi%C3%B3n-de-la-aplicaci%C3%B3n) para preparar la aplicación y fusionar las ramas.

Ejemplo de diagrama de versiones:

<img src="https://uploads.toptal.io/blog/image/129305/toptal-blog-image-1551794424851-b3d5928bc33edfc954ef460062e5cbcc.png" alt="diagrama de versiones" width="653" height="503">

### Accede a estados del repositorio en una determinada versión
Cada versión de la aplicación viene marcada con un *tag* de GIT. Por tal de consultar el repositorio remoto en cada versión, accede al siguiente [**enlace**](https://github.com/joan3pastor/el-raco-fib-ios/tags).

Alternativamente, para consultar un *tag* de manera local, realiza los siguientes pasos:
```
> git checkout master       *# Cambia a la rama principal*
> git tag --list            *# Muestra la lista de tags*
> git show <tag_name>       *# Muestra información del commit asociado a ese tag*
> git checkout <commit_id>  *# Cambia el HEAD al commit seleccionado*
```

## Colaborar y distribución
Bajo la licencia [MIT](https://github.com/joan3pastor/el-raco-fib/blob/master/LICENSE), estás permitido distribuir esta aplicación. No obstante, por tal de centralizar el código, pido por favor mantener este repositorio como el principal. 

Ponte en contacto [conmigo](https://mail.google.com/mail/?view=cm&fs=1&to=joan3pastor@gmail.com&su=%5BFIB%20APP%5D%20...).

## Recursos útiles
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [ReduxJS API reference](https://redux.js.org/api/api-reference)
- [FIB API v2](https://api.fib.upc.edu/v2/o/)
