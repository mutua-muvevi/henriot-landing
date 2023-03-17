
import { Container, Grid, Stack, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import ReusableBreadcrumbs from '../../../../components/breadcrumbs';

const StyledGContainer = styled(Container)(({ theme }) => ({

}));

const StyledGridWrapper = styled(Grid)(({ theme }) => ({
	margin: '0 auto',
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	minHeight: "50vh",
}))

const StyledStackContent = styled(Stack)(({ theme }) => ({
	height: "100%"
}))


const styledImage = {
	height: "100%"
}


const EquitiesBanner = ({ bannerContent, strategies }) => {


	return (
		<StyledGContainer maxWidth="lg">
			Equity banner
			{/* <StyledGridWrapper container>
				<StyledGridItem item xs={12} lg={6.3}>
					<StyledStackContent
						direction="column"
						justifyContent="center"
						spacing={3}
					>
						<ReusableBreadcrumbs breadCrumbsItem={bannerContent.breadcrumbsItem} />
						<FormControl sx={{ m: 1, minWidth: 80 }}>
							<InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								// value={age}
								
								autoWidth
								label="Age"
							>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Twenty</MenuItem>
							<MenuItem value={21}>Twenty one</MenuItem>
							<MenuItem value={22}>Twenty one and a half</MenuItem>
							</Select>
						</FormControl>
						Title
						paragraph
						Button
					</StyledStackContent>
				</StyledGridItem>

				<StyledGridItem item xs={12} lg={5.7}>
					<img
						src={bannerContent.image}
						alt={bannerContent.title}
						style={styledImage}
					/>
				</StyledGridItem>
			</StyledGridWrapper> */}
		</StyledGContainer>
	)
}


export default EquitiesBanner