import React from 'react';

import { Box, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';


import ReusableLineChart from '../../chart/chart';

const StyledContainer = styled(Container)(({ theme }) => ({
	marginTop: "30px",
	marginBottom: "30px",
}));

const StyledChartSection = styled(Box)(({ theme }) => ({
	marginTop: "50px"
}));

const FundsPerfomance = ({chartData}) => {

	return (
		<StyledContainer maxWidth="lg" id="perfomance">
			<Typography variant="h3" sx={{marginBottom: "30px"}}>
				Perfomance
			</Typography>

			<StyledChartSection>
				<ReusableLineChart type="line" chartData={chartData}/>
			</StyledChartSection>

		</StyledContainer>
	);
}

export default FundsPerfomance;
