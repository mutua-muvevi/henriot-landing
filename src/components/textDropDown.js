import { useState } from "react";
import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { styled } from "@mui/system";
import { selectData } from "../redux/action/equity";
import { connect } from "react-redux";

const StyledTextIconStack = styled(Stack)(({ theme }) => ({
	colort: theme.palette.primary.main
}))


const ReusableTextDropDown = ({ options, setData }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [values, setValues] = useState(options[0])
	const theme = useTheme()
	
	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		
		if(options.reduxValue){
			
			
			// setData()
		}
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
					Other funds
				</Typography>
				{isOpen ? <FaChevronUp style={styledIcon} /> : <FaChevronDown style={styledIcon} />}
			</StyledTextIconStack>
			
			<Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
				{options.map((option, i) => (
					<MenuItem key={i} onClick={() => {
						setValues(option)
						setAnchorEl(null);
						setData(option)
					}}>
						{option.label}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}

const mapStateToProps = () => ({

})

const mapDispatchtoProps = (dispatch) => ({
	setData: (option) => dispatch(selectData(option))
})

export default connect(mapStateToProps, mapDispatchtoProps)(ReusableTextDropDown)