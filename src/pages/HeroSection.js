import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import heroImage from "../images/heroImage.png";
function HeroSection() {
	const width = useBreakpointValue({ base: "100vw", md: "50vw" });
	const fontSize = useBreakpointValue({ base: "4xl", sm: "5xl", md: "6xl" });
	const imagePosition = useBreakpointValue({
		base: "center",
		sm: "center",
		md: "flex-end",
	});
	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			flexWrap='wrap'
			pt='10vh'
		>
			<Box p='5vw' w={width}>
				<Text variant='primary' fontSize={fontSize} fontWeight='700'>
					Design Your Confort Zone
				</Text>
				<Text variant='paragraph'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
			</Box>
			<Box w={width} display='flex' justifyContent={imagePosition}>
				<img
					src={heroImage}
					alt='Hero'
					style={{
						"width": "90%",
						"boxShadow": "-12px 12px 0px 4px rgba(108,117,251,1)",
						"-webkit-box-shadow": "-12px 12px 0px 4px rgba(108,117,251,1)",
						"-moz-box-shadow": "-12px 12px 0px 4px rgba(108,117,251,1)",
					}}
				></img>
			</Box>
		</Box>
	);
}

export default HeroSection;
