import { HashLink } from 'react-router-hash-link';

import { Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundsNavigation = styled(Container)(({ theme }) => ({
	marginBottom: "20px"
}));

const StyledNavStack = styled(Stack)(({ theme }) => ({
	borderBottom: "3px solid grey"
}));

const styledLink = {
	color: "inherit",
	textDecoration: "none"
}

const FundsNavigation = ({fundsNavigationItems}) => {

	return (
		<StyledFundsNavigation maxWidth="lg">
			<StyledNavStack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				{
					fundsNavigationItems.map((el, i) => (
						<HashLink smooth to={el.link} key={i} style={styledLink} >
							<Typography variant="h6" color="primary" sx={{textTransform:"uppercase"}}>
								{el.label}
							</Typography>
							
						</HashLink>
					))
				}
			</StyledNavStack>
		</StyledFundsNavigation>
	)
}

export default FundsNavigation