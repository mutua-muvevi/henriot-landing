import React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ReusableLineChart from "../../chart/chart";
import FundInvestmentTerms from "./terms";

const StyledContainer = styled(Container)(({ theme }) => ({
	marginTop: "30px",
	marginBottom: "30px",
}));

const StyledChartSection = styled(Box)(({ theme }) => ({
	marginTop: "50px",
}));

const styledWidget = {
	width: "100%",
	marginBottom: "30px"
}

const FundsPerfomance = ({ chartData, paragraph, widget }) => {
	return (
		<StyledContainer maxWidth="lg" id="perfomance">
			<Typography variant="h3" sx={{ marginBottom: "30px" }}>
				Perfomance
			</Typography>

			<StyledChartSection>
				<a href="https://www.myfxbook.com/members/Henriotgroup/h-alpha-fund/10094600">
					<img
						src="https://widgets.myfxbook.com/custom-widget?id=10094600&width=800&height=600&bart=0&linet=0&symbol=USDJPY&magic=-1&title=H-alpha Fund&titles=14&bgColor=fffafa&gridColor=bdbdbd&lineColor=00cc96&barColor=82ff85&bar1Color=82ff85&fontColor=000000&chartbgc=fffcfc&equityColor=000000"
						alt="widget"
						style={styledWidget}
					/>
				</a>
			</StyledChartSection>

			<FundInvestmentTerms paragraph={paragraph} />
		</StyledContainer>
	);
};

export default FundsPerfomance;
