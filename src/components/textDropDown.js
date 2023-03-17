import { useState } from "react";
import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { styled } from "@mui/system";

const StyledTextIconStack = styled(Stack)(({ theme }) => ({
	colort: theme.palette.primary.main
}))


const ReusableTextDropDown = ({ options }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [values, setValues] = useState(options[0])
	const theme = useTheme()
	
	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};
	
	const handleClose = () => {
		setAnchorEl(null);
	};
	
	
	const isOpen = Boolean(anchorEl);
	
	const styledIcon = {
		color: theme.palette.primary.main
	}

	return (
		<>
			<StyledTextIconStack direction="row" spacing={2} onClick={handleClick} alignItems="center">
				<Typography variant="subtitle2" color="primary">
					{values.label}
				</Typography>
				{isOpen ? <FaChevronUp style={styledIcon} /> : <FaChevronDown style={styledIcon} />}
			</StyledTextIconStack>
			<Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
				{options.map((option, i) => (
					<MenuItem key={option.value} onClick={() => {
						setValues(option)
						setAnchorEl(null);
					}}>
						{option.label}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}

export default ReusableTextDropDown