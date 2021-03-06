# Music Player React

Vamos a crear un reproductor de MP3 que funciona de manera similar a Spotify, ![Todo List](https://github.com/breatheco-de/exercise-music-player-react/blob/master/preview.gif?raw=true).

- Los botones siempre deben permanecer en la parte inferior de la ventana gr谩fica o viewport (usa la posici贸n fija para eso).
- Solo tienes que implementar los botones Reproducir, Pausa, Siguiente y anterior.

## 馃尡  C贸mo empezar este proyecto

No clones este repositorio.

El primer pasa para empezar a codificar es clonar la [plantilla de react.js](https://github.com/4GeeksAcademy/react-hello) en gitpod o localmente en tu computador.

a) Si estas usando Gitpod puedes clonar la plantilla haciendo [clic aqui](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello).
b) Si estas trabajando localmente escribe el siguiente comando en tu terminal: `git clone https://github.com/4GeeksAcademy/react-hello`

馃挕 Importante: Recuerda crear un nuevo repositorio en tu github y actualizar el remote para poder subir tus cambios a github.

## 馃摑 Requisitos:

- Listar las canciones de [esta API](http://assets.breatheco.de/apis/sound/)utilizando la Fetch API,
- Cuando el usuario hace clic en una canci贸n, el player (reproductor) debe comenzar a reproducirla.
- Cuando el usuario hace clic en el bot贸n "siguiente", el reproductor debe comenzar a reproducir la siguiente canci贸n de la lista, si no hay una canci贸n siguiente, debe comenzar     nuevamente a reproducir la primera canci贸n de la lista, lo mismo aplica para el bot贸n "anterior".
- Usa el atributo reaccionar ref de react para obtener la etiqueta o tag de audio del DOM.
- Asegurate de que haya una sola etiqueta o tag `<audio>` en todo el proyecto, usa `ref`para cambiar su src url.

## Recomendaciones
- Usa la funcion `useRef`.
- No llames a la funci贸n setState porque perder谩 el estado de la etiqueta de audio si se llama a la funci贸n de render

## 馃槑 Te sientes con confianza?

Los siguientes requerimientos no son necesarios para entregar la solucion pero puedes intentar realizarlos si tienes tiempo y te sientes con confianza.

+1 Implementa control de volumen": dos botones, uno para subir y otro para bajar el volumen.
+1 Modo repeticion: un checkbox que cuando esta activo, la cancion se repetir谩 eternamente.
+2 Aleatorio:: un bot贸n que al presionarlo reproduzca una canci贸n aleatoriamente.
+5 Medidor de progreso de la canci贸n: Implementa un slider o progress bar que se complete a medida que la cancion se reproduce.
