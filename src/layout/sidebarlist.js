import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

import { navItems } from "./info"
import Logo from "../assets/logo/Black on Transparent.png";

const StyledLogoListItem = styled(List)(({theme}) => ({
	backgroundColor: theme.palette.primary.dark
}))

const LogoParent = styled(ListItem)(({theme}) => ({
	height: "18vh",
}))

const LogoItem = styled("img")(({theme}) => ({
	width: "60vw",
	height: "100%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "20px",
	margin: "20px auto"
}))

const activeNavlink={
	textDecoration: "none",
	color: "#1976d2",
	borderTopLeftRadius: "20px",
	borderBottomLeftRadius: "20px",
	background: "white !important"
}

const navlinkStyle = {
	textDecoration: "none",
	color: "white"
}

const SwipeableDrawerList = ({mobileNav, setMobileNav}) => {

	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleListItemClick = (event, index) => {
	  setSelectedIndex(index);
	};
  

	return (
		<Box
			role="presentation"
			onClick={() => setMobileNav(false)}
			onKeyDown={() => setMobileNav(false)}
		>
			<StyledLogoListItem component="nav" aria-label="rhino jon navigation">
				<LogoParent>
					<LogoItem src={Logo} alt="Rhino John Prime Metal Logo"/>
				</LogoParent>

				
				{
					navItems.map((el, index) => (
						<NavLink 
							style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
							}
							to={el.path} 
							key={index}
						>
							<ListItemButton
								selected={selectedIndex === el.index}
								onClick={(event) => handleListItemClick(event, 0)}
								sx={{
									minHeight: 48,
									justifyContent: mobileNav ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								{el.icon}
								<ListItemText primary={el.label} sx={{ opacity: mobileNav ? 1 : 0 , marginLeft: "15px"}} />

							</ListItemButton>
						</NavLink>
					))
				}

				<Divider color="grey"/>

				
				<Box></Box>

			</StyledLogoListItem>
		</Box>
	)
}

export default SwipeableDrawerList