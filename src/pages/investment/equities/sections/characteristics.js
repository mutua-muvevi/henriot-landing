
import { Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { connect } from 'react-redux';


const StyledGContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	paddingTop: "30px",
	paddingBottom: "30px"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const styledHugeFont = {
	position: "relative",
	fontWeight: "700",
	fontSize: "150px",
	fontStretch:"ultra-condensed",
	opacity: 0.3,
	bottom: "-50px",
	zIndex:-1,
	lineHeight: "70%"
}

const EquityCharacteristics = ({characteristics}) => {


	return (
		<StyledGContainer maxWidth="lg">
			<Stack textAlign="left">
				<Typography variant="h3" color="text.primary">
					Characteristics
				</Typography>
			</Stack>
			
			<StyledGrid container spacing={3}>
				{
					characteristics ?
					characteristics.map((el, i) => (
						<StyledGridItem item xs={12} sm={12} md={6} lg={6} xl={6} key={i}>
							<Typography style={styledHugeFont} color="primary">
								0{i+1}
							</Typography>
							<Typography variant="h5" color="text.primary" sx={{ml:"30px", fontWeight: "800"}}>
								{el.bolded} <span style={{color: "grey", fontWeight: "700"}}>{el.normal}</span>
							</Typography>
						</StyledGridItem>
					)) : ""
				}
			</StyledGrid>

		</StyledGContainer>
	)
}

const mapStateToProps = ({ investmentEquity }) => ({
	characteristics : investmentEquity.data.reduxValue.characteristics
})

export default connect(mapStateToProps)(EquityCharacteristics)