import { NavLink } from "react-router-dom";
import { sentenceCase } from "change-case"

import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { navItems } from "./info"

const StyledContainerStack = styled(Stack)(({theme}) => ({
	marginTop: "20px"
}))

const StyledNavItems = styled(Stack)(({theme}) => ({
	width: "70%",
	marginLeft: "10%",
	marginTop: "20px"
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
	color: "#0b0d0c"
}

const StyledButtonStack = styled(Stack)(({theme}) => ({
	width: "70%",
	marginLeft: "10%",
	marginTop: "20px"
}))


const SideBarList = ({mobileNav, setMobileNav}) => {


	return (
		<Box
			role="presentation"
			onClick={() => setMobileNav(false)}
			onKeyDown={() => setMobileNav(false)}
		>
			<StyledContainerStack
				direction="column"
			>
				<StyledNavItems
					direction="column"
					spacing={1.5}
				>
					
					{
						navItems.map((el, index) => (
							<NavLink 
								style={({isActive}) => 
									isActive ? activeNavlink : navlinkStyle
								}
								to={el.path} 
								key={index}
							>
								<Typography variant="subtitle2">
									{sentenceCase(el.path)}
								</Typography>
							</NavLink>
						))
					}

				</StyledNavItems>

				<Divider
					style={{
						marginTop: "30px",
						marginBottom: "20px"
					}}
				/>
					
				<StyledButtonStack
					direction="column"
					spacing={1.5}
				>
					<Button variant="outlined" color="primary">
						Login
					</Button>

					<Button variant="contained" color="primary">
						Regster
					</Button>
				</StyledButtonStack>

			</StyledContainerStack>
		</Box>
	)
}

export default SideBarList