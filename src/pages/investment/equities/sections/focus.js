
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { connect } from 'react-redux';

const StyledGContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "left",
	justifyContent: "center",
	paddingTop: "30px",
	paddingBottom: "30px"
}));

const StyledIconGrid = styled(Grid)(({ theme }) => ({
	marginBottom: "5vh"
}));

const StyledIconGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledIconBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral,
	width: "150px",
	height: "150px",
	borderRadius: "50%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color:theme.palette.primary.main
}))

const StyledContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledContentGridItem = styled(Grid)(({ theme }) => ({

}));

const EquityFocus = ({focus}) => {


	return (
		<StyledGContainer maxWidth="lg">
			<Typography variant="h3" color="text.primary" sx={{mb:"30px"}}>
				Investment Focus
			</Typography>
			<StyledIconGrid container spacing={3}>
				{
					focus.icons.map((el, i) => (
						<StyledIconGridItem key={i} item xs={6} sm={6} md={4} lg={2} xl={2}>
							<Stack direction="column" alignItems="center" spacing={1.5}>
								<StyledIconBox>
									{el.icon}
								</StyledIconBox>
								<Typography variant="h6" color="text.primary" textAlign="center">
									{el.title}
								</Typography>
							</Stack>
						</StyledIconGridItem>
					))
				}
			</StyledIconGrid>

			<StyledContentGrid container spacing={3}>
				<StyledContentGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
					<Stack direction="column" spacing={3}>
						<Typography variant="h4" color="text.primary" >
							Overview
						</Typography>
						<Stack direction="column" textAlign="left" alignItems="left" spacing={1.5}>
							{
								focus.overview.map((el, i) => (
									<Stack key={i} spacing={3} direction="row">
										<Typography variant="subtitle1" color="text.primary" sx={{flex:1}}>
											{el.key}
										</Typography>
										<Typography variant="subtitle1" color="text.secondary" sx={{flex:3}}>
											: {el.value}
										</Typography>
									</Stack>
								))
							}
						</Stack>
					</Stack>
				</StyledContentGridItem>

				<StyledContentGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
					<Stack direction="column" textAlign="left" spacing={3}>
						<Typography variant="h4" color="text.primary">
							{focus.description.title}
						</Typography>
						{
							focus.description.paragraphs.map((el, i) => (
								<Typography variant="subtitle2" color="text.secondary" key={i} textAlign="justify">
									{el}
								</Typography>
							))
						}
					</Stack>
				</StyledContentGridItem>
			</StyledContentGrid>
		</StyledGContainer>
	)
}

const mapStateToProps = ({ investmentEquity }) => ({
	focus : investmentEquity.data.reduxValue.focus
})

export default connect(mapStateToProps)(EquityFocus)