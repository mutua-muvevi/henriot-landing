import React from 'react';

import { Box, Stack, SwipeableDrawer } from "@mui/material"
import { styled } from "@mui/system";

import SideBarList from "./sidebarlist";
import Logo from "../assets/logo/Black on Transparent.png";


const StyledSwipeAbleDrawer = styled(SwipeableDrawer)(({theme}) => ({
	backgroundColor: "rgba(0, 0, 0, 0.39)"
}))

const swipeableDrawerSX = {
	color: "white",
}

const StyledStack = styled(Stack)(({ theme }) => ({
	height: "100%",
	backgroundColor: theme.palette.primary.main,
	width: "70vw"
}));

const styledLogo = {
	width: "70%",
	marginLeft: "10%",
	marginTop: "20px"
}


const SwipeableSideDrawer = ({mobileNav, setMobileNav}) => {
	return (
		<StyledSwipeAbleDrawer
			anchor="right"
			open={mobileNav}
			onClose={() => setMobileNav(false)}
			onOpen={() => setMobileNav(true)}
			sx={swipeableDrawerSX}
			PaperProps={{
				sx: {
					color: "#dea95f",
				  }
			}}
		>
			<StyledStack spacing={3}>
				<img src={Logo} alt="Rhino John Prime Metal Logo" style={styledLogo}/>
				<SideBarList mobileNav={mobileNav} setMobileNav={setMobileNav}/>
			</StyledStack>
		</StyledSwipeAbleDrawer>
	)
}

export default SwipeableSideDrawer