import React, { useState } from 'react';

import { NavLink } from "react-router-dom";
import { sentenceCase } from 'change-case';

import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import { styled } from "@mui/system";

import { FaBars } from "react-icons/fa";

import { navItems } from "./info"
import Logo from "../assets/logo/Black on Transparent.png"
import SwipeableSideDrawer from "./sidebar";

const StyledNavbar = styled(Box)(({ theme }) => ({

}))

const StyledContainer = styled(Container)(({theme}) => ({
	width: "100%",
	padding:"0px"
}))

const StyledStack = styled(Stack)(({theme}) => ({
	width: "100%",
	paddingTop: "5px",
	paddingBottom: "5px",
}))

const StyledLogoContainer = styled(Stack)(({ theme }) => ({

}));

const styledLogo = {
	width: "200px"
}

const StyledLogoNavItems = styled(Stack)(({ theme }) => ({
	width: "80%"

}));

const styledNavLink = {
	textDecoration: "none",
	color: "initial",
	textTransform: "uppercase",
	
}

const StyledButtonSection = styled(Stack)(({ theme }) => ({

}));

const StyledLoginButton = styled(Button)(({ theme }) => ({
	minWidth: "150px !important",
}));

const StyledRegisterButtons = styled(Button)(({ theme }) => ({
	minWidth: "150px !important",
}));

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false);
	const innerWidth = window.innerWidth

	const handleOpenSidebar = () => {
		setMobileNav(true)
	}

	return (
		<StyledNavbar>
			<StyledContainer maxWidth="xl">
				{
					innerWidth >= 1000 ? (
						<StyledStack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
						>
							<StyledLogoContainer textAlign="flex-start">
								<img src={Logo} alt="Henriot logo" style={styledLogo}/>
							</StyledLogoContainer>

							<StyledLogoNavItems
								direction="row"
								alignItems="center"
								justifyContent="center"
								spacing={3}
							>
								{
									navItems.map((el, i) => (
										<NavLink to={el.path} style={styledNavLink}>
											<Typography variant="subtitle1" color="text.primary">
												{sentenceCase(el.label)}
											</Typography>
										</NavLink>
									))
								}
							</StyledLogoNavItems>

							<StyledButtonSection
								direction="row"
								spacing={3}
							>
								<StyledLoginButton variant="contained" color="primary">
									Login
								</StyledLoginButton>

								<StyledRegisterButtons variant="contained" color="primary">
									Register
								</StyledRegisterButtons>
							</StyledButtonSection>

						</StyledStack>
					) : (
						<AppBar>
							<Toolbar>

							<IconButton
								onClick={handleOpenSidebar}
							>
								<FaBars/>
							</IconButton>
							</Toolbar>
						</AppBar>
					)
				}
			</StyledContainer>



			<SwipeableSideDrawer mobileNav={mobileNav} setMobileNav={setMobileNav} />
		</StyledNavbar>
	)
}

export default Navbar