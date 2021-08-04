import { Box, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../images/logo.png";

function Navbar() {
	return (
		<Box justifyContent='center' w='100%'>
			<Box
				p={4}
				color='white'
				display='flex'
				alignItems='center'
				justifyContent='space-evenly'
				w='100%'
			>
				<Box display='flex'>
					<Text mx={5} variant='navLinks'>
						About
					</Text>
					<Text mx={5} variant='navLinks'>
						Services
					</Text>
				</Box>
				<img src={logo} alt='brand logo' width='160px' height='auto'></img>
				<Box display='flex'>
					<Text mx={5} variant='navLinks'>
						Our Work
					</Text>
					<Text mx={5} variant='navLinks'>
						Contact Us
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default Navbar;
