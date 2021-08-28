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
			h4: {
				fontSize: "1.6rem",
				fontFamily: "Sora, sans-serif",
				fontWeight: 600,
				color: "white",
			},
			h6: {
				fontFamily: "Sora, sans-serif",
				fontWeight: 400,
				color: "white",
				fontSize: "1.2rem",
				textAlign: "justify",
			},
			body2: {
				fontSize: "0.8rem",
				fontFamily: "Sora, sans-serif",
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
				"fontFamily": "Sora, sans-serif",
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
