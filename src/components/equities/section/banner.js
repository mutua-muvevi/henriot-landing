import { Box, Container, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBreadcrumbs from "../../breadcrumbs";
import ReusableTextDropDown from "../../textDropDown";

const imageUrl = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg";

const StyledBanner = styled(Container)(({ theme }) => ({
	minHeight: "70vh"
}));

const StyledWrapperGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledWrapperGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledWrapperStack = styled(Stack)(({ theme }) => ({
	marginTop: "50px"
}));



const styledImage = {

}

const Banner = () => {
	return (
		<StyledBanner maxWidth="lg">
				<StyledWrapperGrid container spacing={3}>
					<StyledWrapperGridItem item xs={12} sm={12} md={6} lg={6} xl={6}>
						<StyledWrapperStack direction="column">
							<ReusableBreadcrumbs/>
							<ReusableTextDropDown/>
						</StyledWrapperStack>
					</StyledWrapperGridItem>
					<StyledWrapperGridItem item xs={12} sm={12} md={6} lg={6} xl={6}>
						<img src={imageUrl} alt="Investment solution equity" style={styledImage} />
					</StyledWrapperGridItem>
			</StyledWrapperGrid>
		</StyledBanner>
	)
}

export default Banner