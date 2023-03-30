import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

import PrivacyPolicy from "./privacy";
import FooterTop from "./top";


const StyledFooter = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral,
}));

const StyledBottomContainer = styled(Container)(({ theme }) => ({
	minHeight: "5vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledCopyRight = styled(Box)(({ theme }) => ({
	backgroundColor: "rgba(0,0,0,0.8)"
}))

const Footer = () => {
	return (
		<StyledFooter>
			<FooterTop/>
			<PrivacyPolicy/>

			<StyledCopyRight>
				<StyledBottomContainer maxWidth="xl">
					<Typography variant="subtitle1" sx={{color: "#fff"}}>
						Copyright 2023 by Henriot Investment Management Ltd | All Rights Reserved
					</Typography>
				</StyledBottomContainer>
			</StyledCopyRight>
		</StyledFooter>
	)
}

export default Footer