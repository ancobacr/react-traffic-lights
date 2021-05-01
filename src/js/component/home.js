import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState("");

	return (
		<div>
			<div className="container">
				<div
					className={color === "green" ? "light greenLight" : "light"}
					id="green"
					onClick={() => setColor("green")}></div>
				<div
					className={
						color === "yellow" ? "light yellowLight" : "light"
					}
					id="yellow"
					onClick={() => setColor("yellow")}></div>
				<div
					className={color === "red" ? "light redLight" : "light"}
					id="red"
					onClick={() => setColor("red")}></div>
			</div>
		</div>
	);
}

{/* 
color a set setColor

<ligh valor:color onClick: setColor({color})>

onclick = si valor de Lit === red ent Set Color(luz) : o valor; ** red =un color
            si valor = red ent Set Color : valor;


                        var Or / valor a cambiar -- comienza por rojo
            const [ color, setColor] = useState("red");
            ReactDOM.render(<TrafficLight />, document.querySelector('#app'));



funcion botonValidar
color  y set
return si valorColor === a red? color o setColor;
si valorColor === a red? color o setColor;
si valorColor === a red? color o setColor;

***
 elemento
 return <div> 

impor boton validar
importar elemento

<Elemento valor o class:red red on click {Boton Validar}

css:
div red[
    backcolor... tal]
*/}
