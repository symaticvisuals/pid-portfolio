import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import React, { useContext, useRef } from "react";
import Slider from "react-slick";

import WorkShowcasePreview from "./components/WorkShowcasePreview";

import { SectionChangeContext } from "./Hero";

function VerticleSlider({ work }) {
	const settings = {
		// centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		draggable: true,
		focusOnSelect: true,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		swipeToSlide: true,
		beforeChange: function (currentSlide, nextSlide) {
			console.log("before change", currentSlide, nextSlide);
		},
		afterChange: function (currentSlide) {
			console.log("after change", currentSlide);
		},
	};
	return (
		<div>
			<Slider {...settings}>
				{work.locations.map((imagePreview, index) => (
					<WorkShowcasePreview imagePreview={imagePreview} type='mobile' />
				))}
			</Slider>
		</div>
	);
}
function DesktopSlider({ work }) {
	const classes = useStyles();

	const slider = useRef(null);
	const settings = {
		className: classes.focus,
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		draggable: true,
		focusOnSelect: true,
		// fade: true,
	};
	return (
		<div>
			<Slider {...settings} ref={slider}>
				{work.locations.map((imagePreview, index) => (
					<WorkShowcasePreview imagePreview={imagePreview} type='desktop' />
				))}
			</Slider>
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: "center",
	},
	subheading: {
		textAlign: "center",
	},
	button: {
		padding: "15px 20px",
		border: "none",
		borderRadius: "20px",
		fontWeight: "bold",
	},
}));

function WorkShowcase({ work }) {
	const classes = useStyles();
	let { setWork, setSelected } = useContext(SectionChangeContext);

	const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<div>
			<Typography variant='h2' className={classes.heading}>
				{work.title}
			</Typography>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					marginBottom: "20px",
				}}
			>
				<button
					className={classes.button}
					onClick={() => {
						setWork({});
						setSelected(false);
					}}
				>
					Back to Project Gallery
				</button>
			</div>

			<div>
				{isSm ? <VerticleSlider work={work} /> : <DesktopSlider work={work} />}
			</div>
		</div>
	);
}

export default WorkShowcase;
