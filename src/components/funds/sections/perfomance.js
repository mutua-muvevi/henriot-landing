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
				<a href="https://www.myfxbook.com/members/Henriotgroup/h-alpha-fund/10094600" target="_blank" rel="noreferrer">
					<img
						src="https://widgets.myfxbook.com/custom-widget?id=10094600&width=600&height=300&bart=0&linet=0&symbol=USDJPY&magic=-1&title=Henriot Investment Management alpha Fund&titles=12&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"
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
