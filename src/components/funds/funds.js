import { Box } from "@mui/material";
import { styled } from "@mui/system";

import FundsComponentBanner from "./sections/banner";
import FundsDocument from "./sections/documents";
import FundsComponentFeatures from "./sections/features";
import FundsNavigation from "./sections/navigation";
import FundsOverview from "./sections/overview";
import FundsParagraph from "./sections/paragraph";
import FundsPerfomance from "./sections/perfomance";

const StyledFundsComponent = styled(Box)(({ theme }) => ({
	
}))


const FundsComponent = ({fundsItem}) => {
	return (
		<StyledFundsComponent>
			<FundsComponentBanner bannerItems={fundsItem.bannerItems}/>
			<FundsComponentFeatures featuresContent={fundsItem.featuresContent}/>
			<FundsNavigation fundsNavigationItems={fundsItem.fundsNavigationItems}/>
			<FundsOverview overviewItems={fundsItem.overviewItems}/>
			<FundsParagraph fundsParagraph={fundsItem.fundsParagraph}/>
			<FundsPerfomance/>
			<FundsDocument documentButtons={fundsItem.documentButtons}/>
		</StyledFundsComponent>
	)
}

export default FundsComponent