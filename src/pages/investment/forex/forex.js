import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ForexBanner from "./sections/banner";
import ForexBrokerAccount from "./sections/brokerAccount";
import ForexCalculator from "./sections/calculator";
import ForexFAQ from "./sections/faq";
import ForexFeatures from "./sections/features";
import ForexPricing from "./sections/pricing";
import ForexReviews from "./sections/reviews";
import ForexThreeContent from "./sections/threeContent";
import ForexTwoContent from "./sections/twoContent";
import ForexWhatIs from "./sections/whatIs";

import { singleInfo } from "./info";

const StyledInvestmentForex = styled(Box)(({ theme }) => ({

}))

const InvestmentForex = () => {
	return (
		<StyledInvestmentForex>
			<ForexBanner banner={singleInfo.banner}/>
			<ForexFeatures features={singleInfo.features}/>
			<ForexWhatIs whatIs={singleInfo.whatIs}/>
			<ForexThreeContent threeContent={singleInfo.threeContent}/>
			<ForexTwoContent twoContent={singleInfo.twoContent}/>
			<ForexPricing pricing={singleInfo.pricing}/>
			<ForexBrokerAccount brokerAccount={singleInfo.brokerAccount}/>
			<ForexCalculator calculator={singleInfo.calculator}/>
			<ForexReviews reviews={singleInfo.reviews}/>
			<ForexFAQ faq={singleInfo.faq}/>
		</StyledInvestmentForex>
	)
}


export default InvestmentForex