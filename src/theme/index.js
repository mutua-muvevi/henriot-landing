import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
	children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
	const themeOptions = useMemo(
		() => ({
			palette,
			shape: { borderRadius: 3 },
			typography,
			shadows,
			customShadows,
		}),
		[]
	);

	const theme = createTheme(themeOptions);
	theme.components = {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Book Antiqua';
					src: url('/fonts/valera-round.ttf') format('truetype');
					font-weight: normal;
					font-style: normal;
				}
			`
		},
		...componentsOverride(theme)
	}

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	);
}
