import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReUsableImageBanner from "../../components/banner";

import TopDownDagram from "../../components/topDownDiagram";
import ProcessTimeline from "./section/timeline";
import TitleParagraph from "./section/titleParagraph";
import VideoText from "./section/videoText";

const image="https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg"

const StyledInvestmentProcess = styled(Box)(({ theme }) => ({
	
}))

const InvestmentProcess = () => {

	const buttonAction = () => {
		console.log("Something happened")
	}

	return (
		<StyledInvestmentProcess>
			<ReUsableImageBanner
				title="Top-Down and Bottom-Up Research To Capture Innovation Early"
				paragraph="Henriot recognizes that disruptive innovation causes rapid cost declines, cuts across sectors, and spawns further innovation. Henriot aims to uncover innovation early, capitalize on opportunities, and create long-term value for investors via an iterative investing strategy integrating top-down and bottom-up research."
				buttobAction={buttonAction}
				image={image}
				minHeight="70vh"
				buttonText="Download Process Overview"
				buttonWidth="200px"
			/>
			<TopDownDagram/>
			<ProcessTimeline/>
			<VideoText/>
			<TitleParagraph/>
		</StyledInvestmentProcess>
	)
}

export default InvestmentProcess