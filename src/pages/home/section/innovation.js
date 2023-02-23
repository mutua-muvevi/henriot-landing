import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaChevronDown } from "react-icons/fa"

import { accordionInfo } from "../info";

const StyledHomeInnovation = styled(Box)(({ theme }) => ({

}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "50px",
	paddingBottom: "50px",
	display: "flex",
	flexDirection:"column",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	justifyContent: "center"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	minHeight: "400px",
	display: "flex",
	flexDirection:"column",
	justifyContent: "flex-start"
}));

const styledImage = {
	width: "100%",
	margin: "auto",
	borderRadius: "10px",
	height: "400px"
}

const HomeInnovation = () => {
	return (
		<StyledHomeInnovation>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>

					<Stack justifyContent="center" alignItems="center" textAlign="center">
						<Typography variant="h3">
							WHY ALGORITHIMIC TRADING
						</Typography>
					</Stack>

					{
						accordionInfo.map((el, i) => (
							<Accordion key={i} sx={{width: "100%"}}>
								<AccordionSummary
									expandIcon={<FaChevronDown />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography variant="h5">
										{el.title}
									</Typography>

								</AccordionSummary>

								<AccordionDetails>
									<StyledGrid container spacing={3}>
										<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
											<Stack spacing={3}>
												{el.paragraph.map((p, index) => (
													<Typography key={index} variant="subtitle1" color="text.secondary">
														{p}
													</Typography>
												))}
											</Stack>
										</StyledGridItem>

										<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
											<img
												src={el.image}
												alt={el.title}
												style={styledImage}
											/>
										</StyledGridItem>
									</StyledGrid> 
								</AccordionDetails>
							</Accordion>
						))
					}
				</Stack>

			</StyledContainer>
		</StyledHomeInnovation>
	)
}

export default HomeInnovation