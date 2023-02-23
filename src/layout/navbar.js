import React, { useState, useLayoutEffect, useRef } from 'react';

import { styled } from '@mui/material/styles';
import { AppBar,Toolbar, IconButton, Typography, Button, Menu, MenuItem, Divider, Container, Stack } from '@mui/material';

import { Fabars } from "react-icons/fa";
import { menuItems } from "./info";

const TopAppBar = styled(AppBar)({
	zIndex: 3,
	marginBottom:"50px"
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
});


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
			<StyledNavButton sx={{textAlign: "left"}} ref={buttonRef} variant="text" onClick={handleClick}>
				<Typography variant="subtitle1" color="text.primary">
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
					<MenuItem key={index} onClick={handleClose}>
						{item.label}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

const StyledDivider = styled(Divider)({
	backgroundColor: "#fff"
})



const Navigation = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<TopAppBar position="fixed">
				<Toolbar sx={{  }}>
					<StyledContainer maxWidth="xl">
						<StyledMenuStack direction="row" justifyContent="space-between">
							<Typography variant="h6" noWrap>
								Logo
							</Typography>
							<div>
								<Button color="inherit">Contact Us</Button>
								<Button color="inherit" onClick={handleMenuClick}>
									Login
								</Button>
								<Menu
									id="login-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={handleMenuClose}
								>
									<MenuItem onClick={handleMenuClose}>Login</MenuItem>
									<MenuItem onClick={handleMenuClose}>Register</MenuItem>
								</Menu>
							</div>

						</StyledMenuStack>

						<StyledDivider />

						<StyledMenuStack direction="row" justifyContent="left" spacing={5}>
							<StyledNavButton sx={{textAlign: "left"}} variant="text">
								<Typography variant="subtitle1" color="text.primary">
									Mainpage
								</Typography>
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
		</>
	);
};

export default Navigation;
