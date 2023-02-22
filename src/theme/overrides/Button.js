// ----------------------------------------------------------------------

export default function Button(theme) {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						boxShadow: 'none',
					},
					borderRadius: theme.shape.default,
					width:150
				},
				sizeLarge: {
					height: 48,
				},
				containedInherit: {
					color: theme.palette.grey[800],
					boxShadow: theme.customShadows.z8,
					'&:hover': {
						backgroundColor: theme.palette.grey[400],
					},
				},
				containedPrimary: {
					boxShadow: theme.customShadows.primary,
					backgroundColor: theme.palette.common.black,
					color: theme.palette.common.white,
					fontSize: 16,
				},
				containedSecondary: {
					boxShadow: theme.customShadows.secondary,
					backgroundColor: theme.palette.secondary.dark,
				},
				outlinedPrimary: {
					fontSize: 16,
				},
				outlinedInherit: {
					border: `1px solid ${theme.palette.grey[500_32]}`,
					'&:hover': {
						backgroundColor: theme.palette.action.hover,
					},
				},
				textInherit: {
					'&:hover': {
						backgroundColor: theme.palette.action.hover,
					},
				},
			},
		},
	};
}
