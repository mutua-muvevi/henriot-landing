import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import ReusableBreadcrumbs from "../../../../components/breadcrumbs";
import { connect } from "react-redux";
import { CgArrowLongUp, CgHome } from "react-icons/cg";
import { FaBitcoin } from "react-icons/fa";
import { BsFileEarmarkText, BsFillEmojiSmileFill, BsShieldLock } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";

const StyledWrapper = styled(Box)(({ theme }) => ({
	// paddingTop: "50px",
	paddingBottom: "50px",
	backgroundColor: theme.palette.background.neutral,
}));

const StyledBreadCrumbsSection = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	paddingTop: "30px",
	paddingBottom: "30px",
	marginBottom: "50px",
}));

const StyledContainer = styled(Container)(({ theme }) => ({}));

const StyledGrid = styled(Grid)(({ theme }) => ({}));

const StyledGridItem = styled(Grid)(({ theme }) => ({}));

const StyledIconBox = styled(Box)(({ theme }) => ({
	color: theme.palette.primary.main,
	backgroundColor: theme.palette.primary.quaterOpacity,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "50px",
	height: "50px",
	borderRadius: "50%",
}));

const StyledCard = styled(Card)(({ theme }) => ({}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({}));

const styledFeaturesIcon = {
	fontSize: "25px",
	fontWeight: 800
};

const ForexFeatures = ({ features }) => {
	return (
		<StyledWrapper>
			<StyledBreadCrumbsSection>
				<Container maxWidth="lg">
					<ReusableBreadcrumbs
						breadCrumbsItem={features.breadcrumbsItem}
					/>
				</Container>
			</StyledBreadCrumbsSection>

			<StyledContainer maxWidth="lg">
				<Stack direction="column" spacing={6}>
					<div>
						<StyledGrid container spacing={6}>
							{features.content.map((el, i) => (
								<StyledGridItem
									key={i}
									item
									xs={6}
									sm={6}
									md={4}
									lg={4}
									xl={4}
								>
									<div>
										<Stack direction="row" spacing={3}>
											<div>{console.log(el.icon)}
												<StyledIconBox>
													{
														el.icon === "CgArrowLongUp" ? <CgArrowLongUp  style={styledFeaturesIcon}/> :
														el.icon === "CgHome" ? <CgHome  style={styledFeaturesIcon}/> :
														el.icon === "BsFillEmojiSmileFill" ? <BsFillEmojiSmileFill  style={styledFeaturesIcon}/> :
														el.icon === "BsShieldLock" ? <BsShieldLock  style={styledFeaturesIcon}/> :
														el.icon === "BsFileEarmarkText" ? <BsFileEarmarkText  style={styledFeaturesIcon}/> :
														el.icon === "FiSliders" ? <FiSliders  style={styledFeaturesIcon}/> : ""
													}
												</StyledIconBox>
											</div>

											<Stack direction="column">
												<Typography
													variant="h6"
													color="text.primary"
												>
													{el.title}
												</Typography>
												<Typography
													variant="h6"
													textAlign="justify"
													color="text.secondary"
													sx={{ fontWeight: "500" }}
												>
													{el.text}
												</Typography>
											</Stack>
										</Stack>
									</div>
								</StyledGridItem>
							))}
						</StyledGrid>
					</div>

					<StyledCard>
						<StyledGrid container spacing={3}>
							{features.cardGroup.map((el, i) => (
								<StyledGridItem
									key={i}
									item
									xs={12}
									sm={12}
									md={6}
									lg={3}
									xl={3}
									sx={{
										borderBottom: {
											sm: "1px solid",
											md: "none",
										},
										borderRight: {
											sm: "none",
											md: "1px solid",
										},
										minHeight: "200px",
										...(i ===
											features.cardGroup.length - 1 && {
											borderBottom: "none",
										}),
										...(i % 4 === 3 && {
											borderRight: "none",
										}),
									}}
								>
									<Stack
										direction="column"
										spacing={1.5}
										sx={{ padding: "10px" }}
										alignItems="center"
									>
										<Typography
											variant="h3"
											color="primary"
										>
											{el.number.slice(0, -1)}
											<span style={{ opacity: 0.6 }}>
												{el.number.slice(-1)}
											</span>
										</Typography>
										<Typography
											variant="h5"
											color="primary"
										>
											{el.title}
										</Typography>
										<Typography
											variant="subtitle2"
											color="text.secondary"
											textAlign="center"
											sx={{ fontWeight: "600" }}
										>
											{el.text}
										</Typography>
									</Stack>
								</StyledGridItem>
							))}
						</StyledGrid>
					</StyledCard>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	);
};

const mapStateToProps = ({investmentEquity}) => ({
	features: investmentEquity.data.features
})

export default connect(mapStateToProps)(ForexFeatures);
