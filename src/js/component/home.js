import React, { useRef, useEffect, useState } from "react";

import { Lista } from "./lista.js";

// npm install --save-dev @iconify/react @iconify-icons/bi
import { Icon } from "@iconify/react";
import caretLeftSquareFill from "@iconify-icons/bi/caret-left-square-fill";
import playCircleFill from "@iconify-icons/bi/play-circle-fill";

// npm install --save-dev @iconify/react @iconify-icons/carbon
import pauseOutlineFilled from "@iconify-icons/carbon/pause-outline-filled";

export function Home() {
	/********** OPCION 1: Importando la lista de lista.js **********/

	//estado con la lista de canciones
	//const [songList, setSongList] = useState(Lista);

	/********** OPCION 2: Usando Fetch *****************************/

	useEffect(() => {
		obtenerCanciones();
	}, []);

	let [songList, setSongList] = useState([]);

	const obtenerCanciones = async () => {
		try {
			const res = await fetch(
				"https://assets.breatheco.de/apis/sound/songs"
			);
			const data = await res.json();
			setSongList(data);
		} catch (error) {
			console.log(error);
		}
	};

	//estado con la id de la cancion seleccionada
	const [cancionActual, setCancionActual] = useState(1);

	//estado para mostrar el boton play/pause
	const [botonPlay, setBotonPlay] = useState("on");

	let audio = useRef();

	//marca y reproduce la cancion seleccionada
	function seleccionar(id) {
		setCancionActual(id);
		iniciarAudio(id);
		setBotonPlay("off");
	}

	//mueve la seleccion hacia arriba o abajo
	function moverSeleccion(direccion) {
		let id = cancionActual + direccion;
		switch (id) {
			case 0:
				id = 20;
				break;
			case 21:
				id = 1;
				break;
		}
		setCancionActual(id);
		audio.current.src = obtenerUrl(id);
		if (botonPlay == "off") {
			iniciarAudio(id);
		}
	}

	//inicia el audio con la id proporcionada
	function iniciarAudio(id) {
		let result = songList.filter(song => song.id == id);
		audio.current.src = obtenerUrl(id);
		audio.current.play();
	}

	//obtiene el url de una cancion a partir del id
	function obtenerUrl(id) {
		let result = songList.filter(song => song.id == id);
		return "https://assets.breatheco.de/apis/sound/" + result[0].url;
	}

	//inicia el audio y muesta el boton pause
	function play() {
		audio.current.play();
		setBotonPlay("off");
	}

	//pausa el audio y muestra el boton play
	function pause() {
		audio.current.pause();
		setBotonPlay("on");
	}

	return (
		<div>
			<audio
				ref={audio}
				src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
			/>

			<div className="contenedor">
				{songList.map((element, i) => {
					return (
						<div
							key={i}
							className={
								"row col-12 border-bottom border-secondary m-0 p-0 " +
								(cancionActual == element.id
									? "bg-secondary"
									: "bg-dark")
							}
							onClick={() => seleccionar(element.id)}>
							<h2 className="col-1 text-light m-0 p-0 text-center">
								{element.id}
							</h2>
							<h2 className="col-11 text-white">
								{element.name}
							</h2>
						</div>
					);
				})}
			</div>

			<div className="footer col-12 m-0 d-flex justify-content-center">
				<div className="col-6 d-flex">
					<div
						className="col-4 m-0 p-0 d-flex justify-content-center align-items-center"
						onClick={() => {
							moverSeleccion(-1);
						}}>
						<Icon
							icon={caretLeftSquareFill}
							color="white"
							height="50"
						/>
					</div>
					<div className="col-4 m-0 p-0 d-flex justify-content-center align-items-center">
						<div
							className={botonPlay == "on" ? "d-block" : "d-none"}
							onClick={play}>
							<Icon
								icon={playCircleFill}
								color="white"
								height="58"
							/>
						</div>
						<div
							className={
								botonPlay == "off" ? "d-block" : "d-none"
							}
							onClick={pause}>
							<Icon
								icon={pauseOutlineFilled}
								color="white"
								height="65"
							/>
						</div>
					</div>
					<div
						className="col-4 m-0 p-0 d-flex justify-content-center align-items-center"
						onClick={() => {
							moverSeleccion(1);
						}}>
						<Icon
							icon={caretLeftSquareFill}
							color="white"
							height="50"
							flip="horizontal"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
