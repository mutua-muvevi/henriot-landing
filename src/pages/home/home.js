import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Banner from "./section/banner";
import Disruptive from "./section/disruptive";
import HomeInnovation from "./section/innovation";
import HomeResearch from "./section/research";
import Strategy from "./section/strategy";

const StyledHomepage = styled(Box)(({ theme }) => ({
	
}))

const Homepage = () => {
	return (
		<StyledHomepage>
			<Banner/>
			<Disruptive/>
			<Strategy/>
			<HomeInnovation/>
			<HomeResearch/>
		</StyledHomepage>
	)
}

export default Homepage