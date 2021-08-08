/* eslint-disable no-dupe-keys */
import { createTheme } from "@material-ui/core";

const theme = createTheme({
	overrides: {
		type: "dark",
		MuiTypography: {
			h1: {
				"fontSize": "5rem",
				"fontFamily": "Sora, sans-serif",
				"fontWeight": 700,
				"background": "#6777FF",

				"background":
					"-webkit-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				"background": "-moz-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				"background": "linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				"-webkit-background-clip": "text",
				"-webkit-text-fill-color": "transparent",
				"line-height": "1.1em",
			},
			h2: {
				"fontSize": "4rem",
				"fontFamily": "Sora, sans-serif",
				"fontWeight": 600,
				"background": "#6777FF",

				"background":
					"-webkit-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				"background": "-moz-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				"background": "linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
				"-webkit-background-clip": "text",
				"-webkit-text-fill-color": "transparent",
				"line-height": "1.1em",
			},
			h6: {
				fontFamily: "Sora, sans-serif",
				fontWeight: 500,
				color: "white",
			},
		},
		MuiButton: {
			text: {
				background: "linear-gradient(to right, #6777FF 0%, #FF386E 100%)",
				borderRadius: "none",
				color: "black",
				borderRadius: "0",
				fontFamily: "Sora, sans-serif",
				padding: "20px 40px",
				fontWeight: 700,
				// fontSize: "17px",
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
