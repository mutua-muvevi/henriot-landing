import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

import EquitiesBanner from "./sections/banner";
import EquityCharacteristics from "./sections/characteristics";
import EquityFocus from "./sections/focus";
import EquityResearch from "./sections/research";


const StyledInvestmentEquities = styled(Box)(({ theme }) => ({

}))

const InvestmentEquities = ({characteristics}) => {

	return (
		<StyledInvestmentEquities>
			<EquitiesBanner/>
			<EquityFocus/>
			{ characteristics ? <EquityCharacteristics/> : null}
			<EquityResearch/>
		</StyledInvestmentEquities>
	)
}

const mapStateToProps = ({ investmentEquity }) => ({
	characteristics :  investmentEquity.data.characteristics.length >= 1 ? investmentEquity.data.characteristics: null,
	banner: investmentEquity.data.banner

})


export default connect(mapStateToProps)(InvestmentEquities)