import React from "react";

function ImageCard({ Location }) {
	return (
		<div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
			<img
				style={{
					objectFit: "cover",
					height: "400px",
					width: "97%",
					borderRadius: "10px",
				}}
				src={Location}
				alt='text'
			></img>
		</div>
	);
}

export default ImageCard;
