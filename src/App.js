import { ThemeProvider, Box } from "@material-ui/core";

import React from "react";
import "./App.css";
import Hero from "./pages/Hero";
import theme from "./styles/Theme";

function App() {
	return (
		<Box w='100vw'>
			<ThemeProvider theme={theme}>
				<Hero />
			</ThemeProvider>
		</Box>
	);
}

export default App;
