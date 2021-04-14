import React from "react";

export const Light = ({ color, lit, setLit }) => {
	return (
		<div>
			<div
				className="light"
				style={{ background: color === lit ? color : "grey" }}
				onClick={() => setLit(color)}></div>
		</div>
	);
};
