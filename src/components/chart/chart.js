import React from 'react';

import Chart from "react-apexcharts";

import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledChart = styled(Box)(({ theme }) => ({

}));

const ReusableChart = ({chartData}) => {
	return (
		<StyledChart>
			<Chart
				options={chartData.options}
				series={chartData.series}
				type="line"
				width="100%"
			/>
		</StyledChart>
	)
}

export default ReusableChart