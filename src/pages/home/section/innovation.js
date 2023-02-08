import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaChevronDown } from "react-icons/fa"

import { accordionInfo } from "../info";

const StyledHomeInnovation = styled(Box)(({ theme }) => ({

}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	flexDirection:"column",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	justifyContent: "center"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const styledImage = {
	width: "70%",
	margin: "auto",
	borderRadius: "10px"
}

const HomeInnovation = () => {
	return (
		<StyledHomeInnovation>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>

					<Stack justifyContent="center" alignItems="center" textAlign="center">
						<Typography variant="h2">
							Why Innovation?
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
									<Typography variant="h3">
										{el.title}
									</Typography>

								</AccordionSummary>
								<AccordionDetails>
									<StyledGrid container spacing={3}>
										<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
											<Typography variant="subtitle1">
												{el.paragraph}
											</Typography>
										</StyledGridItem>

										<StyledGridItem item xxs={12} sm={12} md={12} lg={6} xl={6}>
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