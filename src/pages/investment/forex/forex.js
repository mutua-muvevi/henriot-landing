import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ForexBanner from "./sections/banner";
import ForexBrokerAccount from "./sections/brokerAccount";
import ForexCalculator from "./sections/calculator";
import ForexFAQ from "./sections/faq";
import ForexFeatures from "./sections/features";
import ForexPricing from "./sections/pricing";
import ForexProfitShare from "./sections/profitShare";
import ForexReviews from "./sections/reviews";
import ForexThreeContent from "./sections/threeContent";
import ForexTwoContent from "./sections/twoContent";
import ForexWhatIs from "./sections/whatIs";

const StyledInvestmentForex = styled(Box)(({ theme }) => ({

}))

const InvestmentForex = () => {
	return (
		<StyledInvestmentForex>
			<ForexBanner/>
			<ForexFeatures/>
			<ForexWhatIs/>
			<ForexThreeContent/>
			<ForexTwoContent/>
			<ForexPricing/>
			<ForexProfitShare/>
			<ForexBrokerAccount/>
			<ForexCalculator/>
			<ForexReviews/>
			<ForexFAQ/>
		</StyledInvestmentForex>
	)
}

export default InvestmentForex