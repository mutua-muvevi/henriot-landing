import { Box, CardActionArea, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillPrinterFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

import { documentButtons } from "../info";


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
	height: "50px"
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

const FundsDocument = () => {
	return (
		<StyledFundsDocument maxWidth="lg">
			<StyledTopStack textAlign="left">
				<Typography variant="body2" color="text.primary">
					Know your Fund
				</Typography>
				<Typography variant="h4" color="text.primary">
					Fund Documents
				</Typography>
			</StyledTopStack>

			<StyledGrid container spacing={3}>
				{
					documentButtons.map((el, i) => (
						<StyledGridItem item xs={12} sm={6} key={i}>
							<StyledCardActionArea>
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
		</StyledFundsDocument>
	)
}

export default FundsDocument