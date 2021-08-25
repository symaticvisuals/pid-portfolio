import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import React, { useRef } from "react";
import Slider from "react-slick";
import { LeftArrow, RightArrow } from "./Arrows";

import ImageCard from "./ImageCard";

function ImageCarousel({ Images }) {
	const slider = useRef(null);
	const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
	const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const showArrow = isXs || isSm ? false : true;
	const settings = {
		infinite: false,
		centerPadding: "20px",
		slidesToShow: 1,
		swipeToSlide: true,
		nextArrow: <RightArrow />,
		prevArrow: <LeftArrow />,
		arrows: showArrow,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<React.Fragment>
			<Box>
				<Slider {...settings} ref={slider}>
					{Images.map((item, idx) => {
						return <ImageCard Location={item.location} />;
					})}
				</Slider>
			</Box>
		</React.Fragment>
	);
}

export default ImageCarousel;
