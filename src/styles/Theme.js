/* eslint-disable no-dupe-keys */
import { createTheme } from "@material-ui/core";

const theme = createTheme({
	overrides: {
		type: "dark",
		MuiTypography: {
			h1: {
				"fontSize": "5rem",
				"fontFamily": "Poppins, sans-serif",
				"fontWeight": 500,
				"color": "#3E3E3E",
				// "background": "#6777FF",

				// "background":
				// 	"-webkit-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				// "background": "-moz-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				// "background": "linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				// "-webkit-background-clip": "text",
				// "-webkit-text-fill-color": "transparent",
				"line-height": "1.1em",
			},
			h2: {
				"fontSize": "4rem",
				"fontFamily": "Poppins, sans-serif",
				"fontWeight": 600,
				"color": "#454CFF",
				"textAlign": "center",
				// "background":
				// 	"-webkit-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				// "background": "-moz-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				// "background": "linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				// "-webkit-background-clip": "text",
				// "-webkit-text-fill-color": "transparent",
				"line-height": "1.1em",
			},
			h4: {
				fontSize: "1.6rem",
				fontFamily: "Poppins, sans-serif",
				fontWeight: 600,
				color: "black",
			},
			h5: {
				fontSize: "1.4rem",
				fontFamily: "Poppins, sans-serif",
				fontWeight: 600,
				color: "black",
			},

			h6: {
				fontFamily: "Poppins, sans-serif",
				fontWeight: 400,
				color: "black",
				fontSize: "1.2rem",
				textAlign: "justify",
			},
			body2: {
				fontSize: "0.8rem",
				fontFamily: "Poppins, sans-serif",
				fontWeight: 300,
				color: "white",
			},
		},
		MuiButton: {
			text: {
				"background": "#6777FF",
				"borderRadius": "none",
				"color": "black",
				"borderRadius": "0",
				"fontFamily": "Poppins, sans-serif",
				"padding": "15px 20px",
				"fontWeight": 700,
				// fontSize: "17px",
				"&:hover": {
					background: "#4A55FF",
				},
			},
		},
		MuiInputBase: {
			root: {
				borderRadius: "0",
				color: "white",

				padding: "15px 40px",
				height: "100%",
				border: "1px solid",
				borderColor: "#6777FF",
			},
		},
	},
});
export default theme;
