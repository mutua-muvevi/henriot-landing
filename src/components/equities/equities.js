import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Banner from "./section/banner";
import Characteristics from "./section/characteristics";
import Focus from "./section/focus";
import Research from "./section/research";

const StyledReusableEquities = styled(Box)(({ theme }) => ({

}))

const ReusableEquities = () => {
	return (
		<StyledReusableEquities>
			<Banner/>
			<Focus/>
			<Characteristics/>
			<Research/>
		</StyledReusableEquities>
	)
}

export default ReusableEquities