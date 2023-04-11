import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
	0: '#FFFFFF',
	100: '#F9FAFB',
	200: '#F4F6F8',
	300: '#DFE3E8',
	400: '#C4CDD5',
	500: 'rgba(157, 157, 157, 1)',
	600: '#637381',
	700: '#72718e',
	800: '#1b1b1c',
	900: '#333248',
	500_8: alpha('#919EAB', 0.08),
	500_12: alpha('#919EAB', 0.12),
	500_16: alpha('#919EAB', 0.16),
	500_24: alpha('#919EAB', 0.24),
	500_32: alpha('#919EAB', 0.32),
	500_48: alpha('#919EAB', 0.48),
	500_56: alpha('#919EAB', 0.56),
	500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
	quaterOpacity: "rgba(101, 207, 187, 0.25)",
	halfOpacity: "rgba(101, 207, 187, 0.5)",
	lighter: "#b0e6dc",
	light: "#92ddcf",
	main: "rgba(101, 207, 187, 1)",
	dark: "#37af98",
	darker: '#32a08b',
	contrastText: '#000000',
};

const SECONDARY = {
	lighter: '#D6E4FF',
	light: '#84A9FF',
	main: '#3366FF',
	dark: '#1939B7',
	darker: '#091A7A',
	contrastText: '#fff',
};

const INFO = {
	quaterOpacity: "rgba(101, 207, 187, 0.25)",
	halfOpacity: "rgba(101, 207, 187, 0.5)",
	lighter: "#b0e6dc",
	light: "#92ddcf",
	main: "rgba(101, 207, 187, 1)",
	dark: "#37af98",
	darker: '#32a08b',
	contrastText: '#000000',
};

const SUCCESS = {
	lighter: '#E9FCD4',
	light: '#AAF27F',
	main: '#54D62C',
	dark: '#229A16',
	darker: '#08660D',
	contrastText: GREY[800],
};

const WARNING = {
	lighter: '#FFF7CD',
	light: '#FFE16A',
	main: '#FFC107',
	dark: '#B78103',
	darker: '#7A4F01',
	contrastText: GREY[800],
};

const ERROR = {
	lighter: '#FFE7D9',
	light: '#FFA48D',
	main: '#FF4842',
	dark: '#B72136',
	darker: '#7A0C2E',
	contrastText: '#fff',
};

const BACKGROUND = {
	paper: '#fff', 
	default: GREY[100], 
	neutral: GREY[300],
	grey: GREY[500],
	dark:"rgba(1, 0, 1, 1)"
}

const GRADIENTS = {
	primaryLight: createGradient(PRIMARY.halfOpacity, PRIMARY.quaterOpacity),
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	secondary: createGradient(SECONDARY.light, SECONDARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
	violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
	blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
	green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
	yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
	red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const palette = {
	common: { black: '#000', white: '#fff' },
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	info: { ...INFO },
	success: { ...SUCCESS },
	warning: { ...WARNING },
	error: { ...ERROR },
	grey: GREY,
	gradient: GRADIENTS,
	chart: CHART_COLORS,
	divider: GREY[500_24],
	text: { primary: GREY[900], secondary: GREY[700], disabled: GREY[600] },
	background: { ...BACKGROUND },
	action: {
		active: GREY[600],
		hover: GREY[500_8],
		selected: GREY[500_56],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
};

export default palette;
