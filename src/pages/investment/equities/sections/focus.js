
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { MdDirectionsCar, MdSendToMobile } from 'react-icons/md';
import { BiMicrochip, BiDna } from 'react-icons/bi';
import { FaBitcoin, FaBrain, FaCloud, FaDna, FaFilm, FaMapMarkedAlt, FaMicroscope, FaWifi } from 'react-icons/fa';

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
	color:theme.palette.primary.main,
}))

const StyledContentGrid = styled(Grid)(({ theme }) => ({
	border: "1px solid grey",
	paddingLeft: "20px",
	paddingRight: "20px",
	paddingBottom: "50px",
	marginTop: "30px"
}));

const StyledContentGridItem = styled(Grid)(({ theme }) => ({

}));

const styledIcons = {
	fontSize: "50px"
}

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
									{
										el.title === "Autonomous Vehicles" ? <MdDirectionsCar style={styledIcons}/>:
										el.title === "Artificial Intelligence" ? <FaBrain style={styledIcons}/>:
										el.title === "MaaS" ? <FaMapMarkedAlt style={styledIcons}/>:
										el.title === "Gene Editing" ? <FaDna style={styledIcons}/>:
										el.title === "Genomic Revolution" ? <BiMicrochip style={styledIcons}/>:
										el.title === "Crypto currencies" ? <FaBitcoin style={styledIcons}/>:
										el.title === "Digital Media" ? <FaFilm style={styledIcons}/>:
										el.title === "IoT" ? <FaWifi style={styledIcons}/>:
										el.title === "Mobile Payments" ? <MdSendToMobile style={styledIcons}/>:
										el.title === "Cloud computing" ? <FaCloud style={styledIcons}/>:
										el.title === "Molecular Diagnostics" ? <FaMicroscope style={styledIcons}/>:
										el.title === "Gene Therapy" || el.title === "DNA Sequencing" ? <BiDna style={styledIcons}/>:
										<FaBrain style={styledIcons}/>
									}
								</StyledIconBox>
								<Typography variant="subtitle1" color="text.primary" textAlign="center">
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
										<Typography variant="subtitle1" color="text.primary" sx={{flex:2}}>
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
								<Typography variant="h6" color="text.secondary" key={i} textAlign="justify" style={{fontWeight: "500"}}>
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