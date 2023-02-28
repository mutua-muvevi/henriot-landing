import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

import { fundsNavigationItems } from "../info";

const StyledFundsNavigation = styled(Container)(({ theme }) => ({
	marginBottom: "20px"
}));

const StyledNavStack = styled(Stack)(({ theme }) => ({

}));

const styledLink = {
	color: "inherit",
	textDecoration: "none"
}

const FundsNavigation = () => {
	return (
		<StyledFundsNavigation maxWidth="lg">
			<StyledNavStack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				{
					fundsNavigationItems.map((el, i) => (
						<Link to={el.label} key={i} style={styledLink}>
							<Typography variant="subtitle1" sx={{textTransform:"uppercase"}}>
								{el.label}
							</Typography>
						</Link>
					))
				}
			</StyledNavStack>
		</StyledFundsNavigation>
	)
}

export default FundsNavigation