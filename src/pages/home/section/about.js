import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { homeAbout } from "../info";
import Image from "../../../assets/avatar_1.jpg"

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1675812053/henriot/pexels-tima-miroshnichenko-7580448_rujknu.mp4"

const StyledHomeAbout = styled(Box)(({ theme }) => ({
	
}));


const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	flexDirection:"column",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	justifyContent: "center",
	marginTop: "30px"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));


const styledVideo = {
	objectFit: "cover",
	width: "80%",
	borderRadius: "10px"
}

const HomeAbout = () => {
	return (
		<StyledHomeAbout>
			<StyledContainer maxWidth="xl">
				<Stack justifyContent="center" alignItems="center" textAlign="center">
					<Typography variant="h2">
						Invest For Tomorrow, Today.
					</Typography>
				</Stack>
				<StyledGrid container spacing={3}>
					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Stack direction="column" spacing={3}>
							<Stack direction="column" spacing={1.5}>
								{
									homeAbout.map((el, i) => (
										<Typography variant="subtitle1" key={i}>
											{el}
										</Typography>
									))
								}
							</Stack>

							<Stack direction="row" spacing={3}>
								<Avatar
									src={Image}
									alt="Ken Muturi"
									sx={{width: "80px", height: "80px"}}
								/>
								<Stack direction="column">
									<Typography variant="h4">
										Ken Muturi
									</Typography>
									<Typography variant="body1" color="text.secondary">
										Chief Executive Officer
									</Typography>
									<Typography variant="body1" color="text.secondary">
										Chief Investment Officer
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</StyledGridItem>

					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<video style={styledVideo} autoPlay loop controls="" muted>
							<source  src={videoLink} type="video/mp4"/>
							<Typography variant="h5">
								Your browser does not support HTML video.
							</Typography>
						</video>
					</StyledGridItem>
				</StyledGrid>
			</StyledContainer>
		</StyledHomeAbout>
	)
}

export default HomeAbout