import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import Slider from "react-slick";
import { heroCarousel } from "../Content";
import HeroCarouselPreview from "./components/HeroCarouselPreview";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "80%",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
}));

function HeroCarousel() {
	const classes = useStyles();
	const slider = useRef(null);

	const settings = {
		centerMode: true,
		// draggable: true,
		centerPadding: "50px",
		pauseOnHover: true,
		infinite: true,
		// swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 2000,

		focusOnSelect: true,
		// fade: true,
	};

	return (
		<div className={classes.root}>
			<Slider {...settings} ref={slider}>
				{heroCarousel.map((imagePreview, index) => (
					<HeroCarouselPreview imagePreview={imagePreview} />
				))}
			</Slider>
		</div>
	);
}

export default HeroCarousel;
