import { Box, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system';

import { footerParagraph } from "./info"

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "30px",
	paddingBottom: "30px",
}))

const PrivacyPolicy = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="lg">
				<Stack direction="column" spacing={3}>
					<Typography variant="h4">
						Privacy policy
					</Typography>
					{
						footerParagraph.map((el, i) => (
							<Typography variant="body1" textAlign="justify" key={i}>
								{el}
							</Typography>
						))
					}
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default PrivacyPolicy