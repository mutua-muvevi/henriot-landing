import { Box } from "@mui/material";
import { styled } from "@mui/system";

import BackgroundText from "../../components/backgroundText";
import ExchangeBanner from "./sections/banner";
import ExchangeDocs from "./sections/docs";
import ExchangeFeatures from "./sections/features";
import ExchangePerfomance from "./sections/perfomance";

const incentiveTitle="Annual Rolover Incentives"
const incentiveImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg"
const incentiveText = "The Henriot Investment Management Foreign Exchange Fund is eligible for yearly rollover to protect and leverage equity."


const StyledExchange = styled(Box)(({ theme }) => ({
	
}))


const Exchange = () => {
	return (
		<StyledExchange>
			<ExchangeBanner/>
			<ExchangeFeatures/>
			<BackgroundText
				title={incentiveTitle}
				image={incentiveImage}
				text={incentiveText}
				buttonText="View More"
				height="50vh"
				link="/"
			/>
			<ExchangePerfomance/>
			<ExchangeDocs/>
		</StyledExchange>
	)
}

export default Exchange