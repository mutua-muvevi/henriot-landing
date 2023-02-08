import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ContactBanner from "./sections/banner";
import ContactForm from "./sections/form";

const StyledContact = styled(Box)(({ theme }) => ({
	
}))

const Contact = () => {
	return (
		<StyledContact>
			<ContactBanner/>
			<ContactForm/>
		</StyledContact>
	)
}

export default Contact