import { Box, Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { styled } from "@mui/system";

import { FaEnvelopeOpen } from "react-icons/fa";


const StyledCard = styled(Card)(({ theme }) => ({
	width: "100%"
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	width: "100%"
}));

const StyledCardStack = styled(Stack)(({ theme }) => ({

}));

const styledEnvelopIcon = {
	color:"#637381"

}

const CardForm = ({}) => {
	return (
		<StyledCard>
			<StyledCardContent>
				<StyledCardStack
					direction="row"
					alignItems="center"
					spacing={3}
				>
					<Stack
						sx={{flex:7}}
						direction="row"
						alignItems="center"
						spacing={3}
					>
						<FaEnvelopeOpen style={styledEnvelopIcon}/>
						<TextField
							variant="standard"
							style={{width:"100%"}}
							placeholder="Enter your email"
							type="email"
						/>
					</Stack>

					<Box sx={{flex:3}}>
						<Button variant="contained" color="primary" type="submit">
							Start my free trial
						</Button>
					</Box>

				</StyledCardStack>
			</StyledCardContent>
		</StyledCard>
	)
}

export default CardForm