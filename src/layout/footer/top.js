import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { footerItems, footerSocialMedia } from './info';

const logo = "https://res.cloudinary.com/dqweh6zte/image/upload/v1658133237/henriot/logo/henriot_logo_mefxsi.png";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis pulvinar tellus, in ultricies sapien pharetra vitae."

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItemLogo = styled(Grid)(({ theme }) => ({

}));

const styledLogo = {
	maxWidth:"300px"
}

const StyledSocialMediaContainer = styled(Card)(({ theme }) => ({
	width: "30px",
	height: "30px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
}))

const StyledGridItemContent = styled(Grid)(({ theme }) => ({

}));

const styledLink = {
	color: "inherit",
	textDecoration: "none",
	cursor: "pointer"
}

const FooterTop = () => {
  return (
	<StyledWrapper>
		<Container maxWidth="lg">
			<StyledGrid container spacing={3}>
				<StyledGridItemLogo item xs={12} sm={12} md={12} lg={4} xl={4}>
					<Stack direction="column" textAlign="left" spacing={3}>
						<img src={logo} alt="Henriot Logo" style={styledLogo}/>
						<Typography variant="body1">
							{text}
						</Typography>
						<Stack direction="row" spacing={3}>
							{
								footerSocialMedia.map((el, i) => (
									<a href={el.link} style={styledLink} target="_blank" rel="noreferrer" key={i}>
										<StyledSocialMediaContainer>
											{el.icon}
										</StyledSocialMediaContainer>
									</a>
								))
							}
						</Stack>
					</Stack>
				</StyledGridItemLogo>

				<StyledGridItemContent item xs={12} sm={12} md={12} lg={8} xl={8}>
					<div>
						<Grid container spacing={3}>
							{
								footerItems.map((el, i) => (
									<Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={i}>
										<Stack direction="column" spacing={2}>
											<Typography variant="subtitle1" color="text.primary">
												{el.title}
											</Typography>

											<Stack direction="column" spacing={1.5}>
												{
													el.items.map((el, i) => (
														<Link to={el.path} style={styledLink} key={i}>
															<Typography variant="body1" color="text.secondary" >
																{el.label}
															</Typography>
														</Link>
													))
												}
											</Stack>
										</Stack>
									</Grid> 
								))
							}
						</Grid>
					</div>
				</StyledGridItemContent>
			</StyledGrid>
		</Container>
	</StyledWrapper>
)
}

export default FooterTop