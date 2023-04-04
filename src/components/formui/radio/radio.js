import React from "react";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import { useField } from "formik";

const RadioWrapper = ({ name, label, options,  ...otherProps }) => {
	const [field, meta] = useField(name);

	const configRadioGroup = {
		...field,
		...otherProps,
	};

	if (meta && meta.touched && meta.error) {
		configRadioGroup.error = true;
		configRadioGroup.helperText = meta.error;
	}

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">{label}</FormLabel>
			<RadioGroup {...configRadioGroup}>
				{options.map((option, index) => (
					<FormControlLabel
						key={index}
						value={option.value}
						control={<Radio />}
						label={option.label}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export default RadioWrapper;
