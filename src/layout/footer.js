import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";


import { footerParagraph } from "./info";

const StyledFooter = styled(Box)(({ theme }) => ({
	backgroundColor: "#000000",
	color:"#fff"
}));

const StyledTopContainer = styled(Container)(({ theme }) => ({
	minHeight: "50vh",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	paddingTop: "20px",
	paddingBottom: "20px",
}));

const StyledBottomContainer = styled(Container)(({ theme }) => ({
	minHeight: "5vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const Footer = () => {
	return (
		<StyledFooter>
			<StyledTopContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>
					{
						footerParagraph.map((el, i) => (
								<Typography variant="subtitle1" key={i}>
									{el}
								</Typography>
						))
					}
				</Stack>
			</StyledTopContainer>

			<Divider/>

			<StyledBottomContainer>
				<Typography variant="caption">
					Copyright 2023 by Henriot Investment Management Ltd
				</Typography>
			</StyledBottomContainer>
		</StyledFooter>
	)
}

export default Footer