import { Box } from "@mui/material";
import { styled } from "@mui/system";

import NewsBanner from "./sections/banner";
import ArticleCards from "./sections/cards";

const StyledNews = styled(Box)(({ theme }) => ({
	
}))

const News = () => {
	return (
		<StyledNews>
			<NewsBanner/>
			<ArticleCards/>
		</StyledNews>
	)
}

export default News