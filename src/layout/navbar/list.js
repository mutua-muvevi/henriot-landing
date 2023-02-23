import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import { Box, Collapse, Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

import { drawerMenuItems } from "../info";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Logo = "https://res.cloudinary.com/dqweh6zte/image/upload/v1658133237/henriot/logo/henriot_logo_mefxsi.png";

const StyledLogoListItem = styled(List)(({theme}) => ({

}));

const LogoParent = styled(ListItem)(({theme}) => ({
	height: "100px",
}));

const LogoItem = styled("img")(({theme}) => ({
	width: "60vw",
	height: "100%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "20px",
	margin: "20px auto"
}));

const navlinkStyle = {
	textDecoration: "none",
	color: "inherit"
};

const SwipeableDrawerList = ({ mobileNav, setMobileNav }) => {
	const [submenuOpen, setSubmenuOpen] = useState(null);

	const handleSubmenuClick = (event, index) => {
		setSubmenuOpen(submenuOpen === index ? null : index);
	};
  
	return (
		<Box
			role="presentation"
		>
			<StyledLogoListItem component="nav" aria-label="Henriot mobile navigation">
				<LogoParent>
					<LogoItem src={Logo} alt="Henriot Logo"/>
				</LogoParent>
				
				{drawerMenuItems.top.map((item, index) => (
					<NavLink to={item.link} style={navlinkStyle}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: mobileNav ? 'initial' : 'center',
								px: 2.5,
							}}
							key={index}
						>
							<ListItemText primary={item.label} sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
								{item.navItems && item.navItems.length > 0 ? (
									<IconButton
										aria-label="submenu"
										onClick={(e) => handleSubmenuClick(e, index)}
										size="large"
										edge="end"
										sx={{ mr: -1 }}
									>
										{submenuOpen === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
									</IconButton>
								) : null}

						</ListItemButton>
								<Collapse in={submenuOpen === index} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										{item.navItems.map((subitem, subindex) => (
											<NavLink to={subitem.link} style={navlinkStyle}>
												<ListItemButton
													sx={{
														minHeight: 48,
														justifyContent: mobileNav ? 'initial' :
														'center',
														px: 5,
														}}
														key={subindex}
														>
													<ListItemText primary={subitem.label} sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
												</ListItemButton>
											</NavLink>
										))}
									</List>
								</Collapse>
					</NavLink>
				))}

				<Divider color="grey"/>

			{drawerMenuItems.bottom.map((item, index) => (
				<NavLink to={item.link} style={navlinkStyle}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: mobileNav ? 'initial' : 'center',
							px: 2.5,
						}}
						key={index}
					>
						{item.icon}
						<ListItemText primary={item.label} sx={{ opacity: mobileNav ? 1 : 0, marginLeft: "15px" }} />
					</ListItemButton>
				</NavLink>
			))}
			</StyledLogoListItem>
			</Box>
		);
	}

export default SwipeableDrawerList;
