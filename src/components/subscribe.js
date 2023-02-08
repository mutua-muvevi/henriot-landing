import { Box, Card, CardContent, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";

import CardForm from "./cardForm";
import CenteredTitle from "./centerTitle.js";

const StyledSubscribe = styled(Box)(({ theme }) => ({
	marginBottom: "30px"
}));

const StyledContainer = styled(Container)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color:"#fff",
	minHeight: "400px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
}));

const StyledCardItems = styled(CardContent)(({ theme }) => ({
	
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	width: "70%",
	margin: "auto"
}));

const Subscribe = () => {
	return (
		<StyledSubscribe>
			<StyledContainer maxWidth="xl">
				<StyledCard>
					<StyledCardItems>
						<StyledStack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={3}
						>
							<CenteredTitle
								title="Subscribe to Henriot’s Innovation Research"
								text="Receive Regular Updates And Notifications On Henriots’s Latest Research Because Investing In Innovation Starts With Understanding It"
								color="#fff"
							/>
							<CardForm/>
						</StyledStack>
					</StyledCardItems>
				</StyledCard>
			</StyledContainer>
		</StyledSubscribe>
	)
}

export default Subscribe