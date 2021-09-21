import { Box, makeStyles, Typography } from "@material-ui/core";
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

	const settings = {
		infinite: true,
		slidesToShow: 4,
		swipeToSlide: true,
		nextArrow: <RightArrow />,
		prevArrow: <LeftArrow />,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 2000,
		lazyLoad: true,
		pauseOnHover: true,
	};

	return (
		<div>
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
