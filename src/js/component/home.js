import React, { useState } from "react";
import { Lights } from "./ligths";
//create your first component

export function Home() {
	const colors = {"red", "yellow", "green"};
	const [lit, setLit] = setState("red");

	//   const [color, setColor] = useState("red");

	return (
		<div className="container">
			{colors.map(color => {
				return <Lights color={color} lit={lit} setLit={setLit} />;
			})}
		</div>
	);
}


/* 
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
    backcolor... tal
]

