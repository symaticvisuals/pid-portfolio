import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "../components/ButtonStyle";
import { TextStyle as Text } from "../components/TextStyle";
const theme = extendTheme({
	colors: {
		primary: "#6777FF",
		secondary: "#FF386E",
	},
	components: {
		Button,
		Text,
	},
});

export default theme;
