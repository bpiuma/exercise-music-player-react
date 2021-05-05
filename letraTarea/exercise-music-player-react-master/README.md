# Music Player React

Let's create a MP3 player that works similar to Spotify ![Todo List](https://github.com/breatheco-de/exercise-music-player-react/blob/master/preview.gif?raw=true).

The buttons should always remain at the bottom of the viewport (use position fixed for that).
You only need to implement the Play, Pause, Next and previous buttons.

## 🌱  How to start this project

Do not clone this repository.

The first step to start coding is cloning the [react.js boilerplate](https://github.com/4GeeksAcademy/react-hello) on your local computer or opening it using gitpod.

a) If using Gitpod (recommended) you can clone the boilerplate by [clicking here](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello).

b) If working locally type the following command from your command line: 
```sh
$ git clone https://github.com/4GeeksAcademy/react-hello
````

💡 Important: Remember to create a new repository, update the remote (`git remote set-url origin <your new url>`), and upload the code to your new repository using `add`, `commit` and `push`.

## 📝 Requirements

- List the songs from [the Sounds API](http://assets.breatheco.de/apis/sound/) using the Fetch API.
- When the user clicks on a song, the player it must start playing it.
- When the user clicks on the "next" button the player should start playing the next song from the list, if there is no next song then it should start over by playing the first song of the list, the same applies for the "previous" button.
- Use the react ref attribute to get the audio tag from the DOM.
- Make sure to have only one `<audio>` tag on the entire project, use `ref` to change its src url.

## 😎 Feeling Confident?

The following features are not needed for the final solution, but you can develop them if you feel confident enough:

- `+1` Implement implement volume control: two buttons, one to rise and one to lower the volume.
- `+1` Repeat mode button: when activated, the current song will repeat forever until deativated.
- `+2` Shuffle functionality: the songs will play randomly instead of in order.
- `+5` Implement slider timeline: The slider will move with the song accordingly, if clicked the song will jump to that time.
