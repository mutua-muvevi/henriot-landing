import { InputAdornment, TextField } from "@mui/material";
import React from 'react';
import { useField } from "formik";

const TextFieldWrapper = ({name, variant, multiline, size, shrink, startIcon,...otherProps}) => {

	const [field, meta] = useField(name)

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		size: size ? size : "small",
		multiline : multiline === true ? multiline : false,
		InputLabelProps: {
			shrink: shrink ? null : true
		},
		InputProps: startIcon
      ? {
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
        }
      : {},
	}

	if (meta && meta.touched && meta.error){
		configTextField.error = true
		configTextField.helperText = meta.error
	}

	return (
		<TextField  
			{...configTextField}
		/>
	)
}

export default TextFieldWrapper