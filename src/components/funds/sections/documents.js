import { Box, Button, CardActionArea, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillPrinterFill } from "react-icons/bs";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const StyledFundsDocument = styled(Container)(({ theme }) => ({
	paddingTop: "30px",
	paddingBottom: "30px"
}));

const StyledTopStack = styled(Stack)(({ theme }) => ({
	borderBottom: "1px solid grey",
	paddingBottom : "10px"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	paddingTop: "30px"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
}));

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
	borderBottom: "1px solid grey",
	height: "50px",
}));

const StyledButtonStack = styled(Stack)(({ theme }) => ({

}));

const StylediconButtonContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral,
	padding: "5px"
}));

const styledIconButton = {
	fontSize: "20px"
}

const StyledButton = styled(Button)(({ theme }) => ({
	marginTop: "50px"
}))

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const FundsDocument = ({documentButtons}) => {

	return (
		<StyledFundsDocument maxWidth="lg" id="documents">
			<StyledTopStack textAlign="left">
				<Typography sx={{fontWeight: "700"}} color="text.primary">
					Know your Fund
				</Typography>
				<Typography variant="h3" color="text.primary">
					Fund Documents
				</Typography>
			</StyledTopStack>

			<StyledGrid container spacing={3}>
				{
					documentButtons.map((el, i) => (
						<StyledGridItem item xs={12} sm={6} key={i}>
							<StyledCardActionArea onClick={() => {
								window.open(el.path, "_blank")
							}}>
								<StyledButtonStack direction="row" alignItems="center" justifyContent="space-between">
									<Stack spacing={3} direction="row" alignItems="center">
										<StylediconButtonContainer>
											<BsFillPrinterFill style={styledIconButton}/>
										</StylediconButtonContainer>

										<Typography variant="subtitle1" color="text.primary" sx={{flex: 5}}>
											{el.label}
										</Typography>
									</Stack>
									
									<FaDownload style={styledIconButton}/>
								</StyledButtonStack>
							</StyledCardActionArea>
						</StyledGridItem>
					))
				}
			</StyledGrid>

			<Link to="/landing/resources/research" style={styledLink}>
				<StyledButton variant="contained" endIcon={<FaArrowRight/>}>
					View All
				</StyledButton>
			</Link>

		</StyledFundsDocument>
	)
}

export default FundsDocument