import { Box } from "@mui/material";
import { styled } from "@mui/system";

import FundsComponentBanner from "./sections/banner";
import FundsDocument from "./sections/documents";
import FundsComponentFeatures from "./sections/features";
import FundsNavigation from "./sections/navigation";
import FundsOverview from "./sections/overview";
import FundsParagraph from "./sections/paragraph";
import FundsPerfomance from "./sections/perfomance";
// import FundInvestmentTerms from "./sections/terms";

const StyledFundsComponent = styled(Box)(({ theme }) => ({
	
}))


const FundsComponent = ({fundsItem}) => {


	return (
		<StyledFundsComponent>
			<FundsComponentBanner bannerItems={fundsItem.bannerItems}/>
			<FundsComponentFeatures featuresContent={fundsItem.featuresContent}/>
			<FundsNavigation fundsNavigationItems={fundsItem.fundsNavigationItems}/>
			<FundsOverview overviewItems={fundsItem.overviewItems} paragraph={fundsItem.overViewParagraph} />
			<FundsParagraph fundsParagraph={fundsItem.fundsParagraph}/>
			<FundsPerfomance chartData={fundsItem.chartData} paragraph={fundsItem.perfomanceParagraph} widget={fundsItem.performanceWidget}/>
			{/* <FundInvestmentTerms paragraph={fundsItem.perfomanceParagraph}/> */}
			<FundsDocument documentButtons={fundsItem.documentButtons}/>
		</StyledFundsComponent>
	)
}

export default FundsComponent