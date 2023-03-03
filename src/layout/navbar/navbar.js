import React, { useState, useLayoutEffect, useRef } from 'react';

import { styled } from '@mui/material/styles';
import { AppBar,Toolbar, IconButton, Typography, Button, Menu, MenuItem, Divider, Container, Stack, Box } from '@mui/material';

import { FaBars } from "react-icons/fa";

import { menuItems } from "../info";
import { NavLink } from 'react-router-dom';

import SwipeableSideDrawer from './drawer';

const TopAppBar = styled(AppBar)({
	zIndex: 3,
});

const StyledContainer = styled(Container)({
	width: "100%",
	paddingTop: "20px"
})

const StyledMenuStack = styled(Stack)({
	width: "100%",
	paddintTop: "20px",
	paddintBottom: "20px",
});

const StyledNavButton = styled(Button) ({
	paddingTop: "20px",
	paddingBottom: "20px",
	width:"max-content"
});

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const DropdownMenu = ({ menuItems }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const buttonRef = useRef(null);

	useLayoutEffect(() => {
		if (buttonRef.current) {
			buttonRef.current.style.width = 'auto';
			buttonRef.current.style.width = `${buttonRef.current.offsetWidth}px`;
		}
	}, [anchorEl]);
  
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};
  
	return (
		<div>
			<StyledNavButton sx={{textAlign: "left"}} variant="text" onClick={handleClick}>
				<Typography variant="subtitle1" color="text.primary" style={{textTransform: "uppercase"}}>
					{menuItems.label}
				</Typography>
			</StyledNavButton>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				{menuItems.navItems.map((item, index) => (
					<NavLink to={item.link} style={styledLink}>
						<MenuItem key={index} onClick={handleClose}>
							<Typography variant="subtitle2" color="text.primary"  style={{textTransform: "uppercase"}}>
								{item.label}
								{console.log(item)}
							</Typography>
						</MenuItem>
					</NavLink>
				))}
			</Menu>
		</div>
	);
};

const logo = "https://res.cloudinary.com/dqweh6zte/image/upload/v1658133237/henriot/logo/henriot_logo_mefxsi.png";

const StyledDivider = styled(Divider)({
	backgroundColor: "#fff",
	marginTop: "10px",
})

const styledLogo = {
	height: "60px"
}

const styledMobileLogo = {
	height: "40px"
}

const Navigation = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const [mobileNav, setMobileNav] = useState(false)

	const handleMobileNav = () => {
		setMobileNav(!mobileNav)
	}

	const innerWidth = window.innerWidth

	return (
		<>
			{
				innerWidth >= 1000 ? (
				<TopAppBar position="scroll">
					<Toolbar>
						<StyledContainer maxWidth="lg">
							<StyledMenuStack direction="row" justifyContent="space-between">
								<img src={logo} alt="Henriot logo" style={styledLogo}/>
								<Stack direction="row" justifyContent="right" alignItems="flex-end" spacing={3}>

									<Box>
										<NavLink to="/landing/contact" style={styledLink}>
											<Button variant="text" >
												<Typography variant="subtitle1" color="text.primary" style={{textTransform: "capitalize"}}>
													Contact us
												</Typography>
											</Button>
										</NavLink>

									</Box>
									<Box>
										<Button variant="outlined" onClick={handleMenuClick}>
											Login
										</Button>

									</Box>
									<Box>
										<Button variant="contained" onClick={handleMenuClick}>
											Register
										</Button>
									</Box>
									
								</Stack>

							</StyledMenuStack>

							<StyledDivider />

							<StyledMenuStack direction="row" justifyContent="left" alignItems="center" spacing={5}>
								<StyledNavButton sx={{textAlign: "left"}} variant="text">
									<NavLink to="/landing/main" style={styledLink}>
										<Typography variant="subtitle1" color="text.primary" style={{textTransform: "uppercase"}}>
											Home
										</Typography>
									</NavLink>

								</StyledNavButton>

								{
									menuItems.map((item, index) => (
										<div key={index}>
											<DropdownMenu menuItems={item} />
										</div>
									))
								}
							</StyledMenuStack>

						</StyledContainer>

					</Toolbar>
				</TopAppBar>
				) : (
					<TopAppBar>
						<Container maxWidth="lg">
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<img src={logo} alt="Henriot mobile logo" style={styledMobileLogo}/>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMobileNav}
									color="inherit"
									// sx={iconButtonSX}
								>
									<FaBars/>
								</IconButton>
							</Stack>
						</Container>
					</TopAppBar>
				)

			}

			<SwipeableSideDrawer mobileNav={mobileNav} setMobileNav={setMobileNav} />
		</>
	);
};

export default Navigation;
