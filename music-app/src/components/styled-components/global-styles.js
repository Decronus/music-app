import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Stratos';
		src: url('Stratos-Regular.woff2') format('woff2'),
			url('Stratos-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
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

	audio {
		display: none;
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
