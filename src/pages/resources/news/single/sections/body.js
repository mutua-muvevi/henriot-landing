import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system"

import { connect } from "react-redux";

const StyledWrapper = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px"
}))

const StyledContentStack = styled(Stack)(({ theme }) => ({
	
}))

const NewsBody = ({article}) => {
	return (
		<StyledWrapper maxWidth="lg">
			<Stack direction="column" spacing={3}>{console.log("Blocks", article.blocks)}
				{
					article.blocks.map((el, i) => (
						<StyledContentStack key={i} spacing={1.5}>
							{el.title ? (
								<Typography variant="h4" color="text.primary">
									{el.title}
								</Typography>
							) : ""}
							{el.subtitle ? (
								<Typography variant="h6" color="text.primary">
									{el.subtitle}
								</Typography>
							) : ""}
							{el.paragraphs ? el.paragraphs.map((par, i) => (
								<Typography variant="subtitle2" color="text.secondary" key={i}>
									{par}
								</Typography>
							)) : ""}
						</StyledContentStack>
					))
				}
			</Stack>
		</StyledWrapper>
	)
}


const mapStateToProps = ({article}) => ({
	article : article.article
})

export default connect(mapStateToProps)(NewsBody)