import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'StratosSkyeng';
		src: local("StratosSkyeng"), local("StratosSkyeng"), url("../public/fonts/StratosSkyeng.woff2") format("woff2"), url("../public/fonts/StratosSkyeng.woff") format("woff");
		font-weight: 400;
		font-style: normal;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	*:before,
	*:after {
		box-sizing: border-box;
	}

	a,
	a:visited {
		text-decoration: none;
		font-family: 'StratosSkyeng', sans-serif;
		cursor: pointer;
	}

	button {
		cursor: pointer;
	}

	ul li {
		list-style: none;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		font-family: 'StratosSkyeng', sans-serif;
		color: #FFFFFF;
	}
`;

export default GlobalStyles;
