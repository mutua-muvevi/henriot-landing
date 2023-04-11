// ----------------------------------------------------------------------

function pxToRem(value) {
	return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm),
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md),
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg),
		},
	};
}

const FONT_PRIMARY = "'varela round', sans-serif";
const FONT_SECONDARY ="'circular-std-medium', sans-serif"

const typography = {
	fontFamily: FONT_PRIMARY,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
	h1: {
		fontWeight: 800,
		lineHeight: 80 / 64,
		fontSize: pxToRem(40),
		fontFamily: FONT_SECONDARY,
		...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
	},
	h2: {
		fontWeight: 700,
		lineHeight: 64 / 48,
		fontSize: pxToRem(32),
		fontFamily: FONT_SECONDARY,
		fontStretch: 'ultra-expanded',
		...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
	},
	h3: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(24),
		fontFamily: FONT_SECONDARY,
		...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
	},
	h4: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		fontFamily: FONT_SECONDARY,
		...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
	},
	h5: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(18),
		fontFamily: FONT_SECONDARY,
		...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
	},
	h6: {
		fontWeight: 700,
		lineHeight: 28 / 18,
		fontSize: pxToRem(17),
		fontFamily: FONT_SECONDARY,
		...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
	},
	subtitle1: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(16),
		fontFamily: FONT_SECONDARY,
	},
	subtitle2: {
		fontWeight: 600,
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
		fontFamily: FONT_SECONDARY,
	},
	body1: {
		lineHeight: 1.5,
		fontSize: pxToRem(14),
		fontFamily: FONT_SECONDARY
	},
	body2: {
		lineHeight: 22 / 14,
		fontSize: pxToRem(12),
		fontFamily: FONT_SECONDARY
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(11),
	},
	overline: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(11),
		letterSpacing: 1.1,
		textTransform: 'uppercase',
	},
	button: {
		fontWeight: 700,
		lineHeight: 24 / 14,
		fontSize: pxToRem(12),
		textTransform: 'capitalize',
	},
};

export default typography;
