import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Subscribe from "../../components/subscribe";
import HomeAbout from "./section/about";
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
			<HomeAbout/>
			<HomeResearch/>
			<Subscribe/>
		</StyledHomepage>
	)
}

export default Homepage