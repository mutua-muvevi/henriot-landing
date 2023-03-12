import { HashLink } from 'react-router-hash-link';

import { Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundsNavigation = styled(Container)(({ theme }) => ({
	marginBottom: "20px"
}));

const StyledNavGrid = styled(Grid)(({ theme }) => ({
	borderBottom: "3px solid grey"
}));

const StyledNavItems = styled(Grid)(({ theme }) => ({

}));

const styledLink = {
	color: "inherit",
	textDecoration: "none"
}

const FundsNavigation = ({fundsNavigationItems}) => {

	return (
		<StyledFundsNavigation maxWidth="lg">
			<StyledNavGrid container spacing={3}>
				{
					fundsNavigationItems.map((el, i) => (
						<StyledNavItems item key={i} xs={12} sm={2.4} md={2.4} lg={2.4} xl={2.4}>
							<Stack direction="row" justifyContent="center" alignItems="center" textAlign="center">
								<HashLink smooth to={el.link} style={styledLink} >
										<Typography variant="h6" color="primary" sx={{textTransform:"uppercase"}}>
											{el.label}
										</Typography>
								</HashLink>
							</Stack>
						</StyledNavItems>
					))
				}
			</StyledNavGrid>
		</StyledFundsNavigation>
	)
}

export default FundsNavigation