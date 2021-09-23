import React, { useRef } from "react";
import Slider from "react-slick";
import { heroCarousel } from "../Content";
import HeroCarouselPreview from "./components/HeroCarouselPreview";

function HeroCarousel() {
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
		<div style={{ width: "80%" }}>
			<Slider {...settings} ref={slider}>
				{heroCarousel.map((imagePreview, index) => (
					<HeroCarouselPreview imagePreview={imagePreview} />
				))}
			</Slider>
		</div>
	);
}

export default HeroCarousel;
