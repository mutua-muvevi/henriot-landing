import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

const TabPanel = (props) =>{
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
			style={{width: "100%"}}
		>
			{value === index && (
				<Box sx={{width: "100%"}}>
					{children}
				</Box>
			)}
		</div>
	);
}

const a11yProps = (index) => {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const VerticalTabs = ({tabItems}) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Stack
			direction="row"
			sx={{
				width: "100%",
				minHeight: "50vh",
				// height: 224
			}}
		>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				TabIndicatorProps={{ style: { display: 'none' } }}
				sx={{width: "30%"}}
			>
				{
					tabItems.map((el, i) => (
						<Tab
							label={el.label}
							{...a11yProps(0)}
							key={i}
							sx={{
								alignItems:"start",
								typography: "h5",
								textAlign:"left"
							}}
						/>
					))
				}
			</Tabs>

			{
				tabItems.map((el, i) => (
					<TabPanel value={value} index={i} key={i} sx={{width: "70%", color: "grey"}}>
						{el.pannel}
					</TabPanel>
				))
			}
		</Stack>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	tabItems: PropTypes.arrayOf(
		PropTypes.shape({
		  label: PropTypes.string.isRequired,
		  pannel: PropTypes.node.isRequired,
		})
	).isRequired,
};

export default VerticalTabs