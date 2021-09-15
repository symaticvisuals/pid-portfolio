import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";

function LeftArrow(props) {
	const { className, style, onClick } = props;
	return (
		<React.Fragment>
			<TiArrowLeftThick
				style={
					onClick ? { ...style, color: "black" } : { ...style, display: "none" }
				}
				onClick={onClick}
				className={className}
				fontSize='large'
			/>
		</React.Fragment>
	);
}

function RightArrow(props) {
	const { className, style, onClick } = props;
	return (
		<React.Fragment>
			<TiArrowRightThick
				style={
					onClick ? { ...style, color: "black" } : { ...style, display: "none" }
				}
				onClick={onClick}
				className={className}
				fontSize='large'
			/>
		</React.Fragment>
	);
}
export { LeftArrow, RightArrow };
