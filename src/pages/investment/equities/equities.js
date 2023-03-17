import { Box } from "@mui/material";
import { styled } from "@mui/system";

import EquitiesBanner from "./sections/banner";
import EquityCharacteristics from "./sections/characteristics";
import EquityFocus from "./sections/focus";
import EquityResearch from "./sections/research";


const StyledInvestmentEquities = styled(Box)(({ theme }) => ({

}))

const strategies = [
	"Market disruptor",
	"DNA game-changer",
	"Finance frontier",
	"Future fabrication",
	"Crypto craze",
	"Augmented reality",
	"Decentralized web 3.0",
	"Intelligent machines",
	"Galactic adventure",
	"Silicon Wadi",
	"Digital gold",
	"Future unicorns",
	"On-demand mobility",
	"Sustainable investment",
	"Other funds",
]

const InvestmentEquities = () => {

	return (
		<StyledInvestmentEquities>
			<EquitiesBanner/>
			<EquityFocus/>
			<EquityCharacteristics/>
			<EquityResearch/>
		</StyledInvestmentEquities>
	)
}

export default InvestmentEquities