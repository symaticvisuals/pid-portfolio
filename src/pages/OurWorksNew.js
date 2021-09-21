import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useRef } from "react";
import Slider from "react-slick";

import { ourWorks } from "../Content";
import { LeftArrow, RightArrow } from "./components/Arrows";
import WorkCard from "./components/WorkCard";

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: "center",
	},
	subheading: {
		textAlign: "center",
	},
}));

const OurWorksNew = () => {
	const classes = useStyles();
	const slider = useRef(null);
	const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
	const isLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
	const renderSlides = () => {
		if (isSm) {
			return 1;
		} else if (isMd) {
			return 3;
		} else if (isLg) {
			return 4;
		}
		return 5;
	};
	const settings = {
		infinite: true,
		slidesToShow: renderSlides(),
		swipeToSlide: true,
		nextArrow: <RightArrow />,
		prevArrow: <LeftArrow />,
		arrows: isSm ? false : true,
		autoplay: false,
		autoplaySpeed: 2000,
		lazyLoad: true,
		pauseOnHover: true,
	};

	return (
		<div id='works'>
			<Typography variant='h2' className={classes.heading}>
				Our Works
			</Typography>
			<Typography variant='h5' className={classes.subheading}>
				A Selection of Signature Projects
			</Typography>
			<Box style={{ margin: "5vh 5vw" }}>
				<Slider {...settings} ref={slider}>
					{ourWorks.map((work, index) => (
						<WorkCard key={index} workObj={work} />
					))}
				</Slider>
			</Box>
		</div>
	);
};

export default OurWorksNew;
