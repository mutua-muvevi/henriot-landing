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


const FundsComponent = () => {
	return (
		<StyledFundsComponent>
			<FundsComponentBanner/>
			<FundsComponentFeatures/>
			<FundsNavigation/>
			<FundsOverview/>
			<FundsParagraph/>
			<FundsPerfomance/>
			<FundsDocument/>
		</StyledFundsComponent>
	)
}

export default FundsComponent