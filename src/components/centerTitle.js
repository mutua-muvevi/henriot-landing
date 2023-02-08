import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCenteredTitle = styled(Stack)(({ theme }) => ({
	width: "100%",
}))

const CenteredTitle = ({ title, text, color }) => {
	return (
		<StyledCenteredTitle
			direction="column"
			justifyContent="center"
			alignItems="center"
			textAlign="center"
		>
				<Typography variant="h2" color={color ? color : "text.primary"} gutterBottom>
					{title}
				</Typography>
				{
					text ? (
						<Typography variant="body2" color={color ? color : "text.secondary"} gutterBottom>
							{text}
						</Typography>
					) : null
				}
		</StyledCenteredTitle>
	)
}

export default CenteredTitle