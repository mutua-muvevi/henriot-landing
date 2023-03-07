import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableEquities from "../../../components/equities/equities";

const StyledInvestmentEquities = styled(Box)(({ theme }) => ({

}))

const InvestmentEquities = () => {
	return (
		<StyledInvestmentEquities>
			<ReusableEquities/>
		</StyledInvestmentEquities>
	)
}

export default InvestmentEquities