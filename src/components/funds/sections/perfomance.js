import React from 'react';

import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
	marginTop: "30px",
	marginBottom: "30px",
}));

const FundsPerfomance = () => {

	return (
		<StyledContainer maxWidth="lg">
			<Typography variant="h3">
				Perfomance
			</Typography>
			<Typography variant="subtitle1">
				Chart here...
			</Typography>
		</StyledContainer>
	);
}

export default FundsPerfomance;
