import React from "react";

function ImageCard({ Location }) {
	return (
		<div>
			<img
				style={{ objectFit: "cover", height: "400px", width: "100%" }}
				src={Location}
				alt='text'
			></img>
		</div>
	);
}

export default ImageCard;
