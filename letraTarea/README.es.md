# Music Player React

Vamos a crear un reproductor de MP3 que funciona de manera similar a Spotify, ![Todo List](https://github.com/breatheco-de/exercise-music-player-react/blob/master/preview.gif?raw=true).

- Los botones siempre deben permanecer en la parte inferior de la ventana gráfica o viewport (usa la posición fija para eso).
- Solo tienes que implementar los botones Reproducir, Pausa, Siguiente y anterior.

## 🌱  Cómo empezar este proyecto

No clones este repositorio.

El primer pasa para empezar a codificar es clonar la [plantilla de react.js](https://github.com/4GeeksAcademy/react-hello) en gitpod o localmente en tu computador.

a) Si estas usando Gitpod puedes clonar la plantilla haciendo [clic aqui](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello).
b) Si estas trabajando localmente escribe el siguiente comando en tu terminal: `git clone https://github.com/4GeeksAcademy/react-hello`

💡 Importante: Recuerda crear un nuevo repositorio en tu github y actualizar el remote para poder subir tus cambios a github.

## 📝 Requisitos:

- Listar las canciones de [esta API](http://assets.breatheco.de/apis/sound/)utilizando la Fetch API,
- Cuando el usuario hace clic en una canción, el player (reproductor) debe comenzar a reproducirla.
- Cuando el usuario hace clic en el botón "siguiente", el reproductor debe comenzar a reproducir la siguiente canción de la lista, si no hay una canción siguiente, debe comenzar     nuevamente a reproducir la primera canción de la lista, lo mismo aplica para el botón "anterior".
- Usa el atributo reaccionar ref de react para obtener la etiqueta o tag de audio del DOM.
- Asegurate de que haya una sola etiqueta o tag `<audio>` en todo el proyecto, usa `ref`para cambiar su src url.

## Recomendaciones
- Usa la funcion `useRef`.
- No llames a la función setState porque perderá el estado de la etiqueta de audio si se llama a la función de render

## 😎 Te sientes con confianza?

Los siguientes requerimientos no son necesarios para entregar la solucion pero puedes intentar realizarlos si tienes tiempo y te sientes con confianza.

+1 Implementa control de volumen": dos botones, uno para subir y otro para bajar el volumen.
+1 Modo repeticion: un checkbox que cuando esta activo, la cancion se repetirá eternamente.
+2 Aleatorio:: un botón que al presionarlo reproduzca una canción aleatoriamente.
+5 Medidor de progreso de la canción: Implementa un slider o progress bar que se complete a medida que la cancion se reproduce.
