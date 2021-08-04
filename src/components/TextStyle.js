/* eslint-disable no-dupe-keys */
export const TextStyle = {
	// style object for base or default style
	baseStyle: {
		fontFamily: "Sora, sans-serif",
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {
		primary: {
			"background": "#6777FF",

			"background":
				"-webkit-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
			"background": "-moz-linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
			"background": "linear-gradient(to right, #6777FF 0%, #FF386E 50%)",
			"-webkit-background-clip": "text",
			"-webkit-text-fill-color": "transparent",
			"line-height": "1.1em",
		},
		paragraph: {
			color: "white",
		},
		navLinks: {
			fontWeight: "500",
			fontSize: "1.2em",
		},
	},
	// default values for `size` and `variant`
	defaultProps: {},
};
