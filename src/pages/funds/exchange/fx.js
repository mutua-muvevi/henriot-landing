import React from 'react';
import FundsComponent from '../../../components/funds/funds';

import { foreignExchangefundsItem } from '../info';

const FXFund = () => {
	return (
		<div>
			<FundsComponent fundsItem={foreignExchangefundsItem}/>
		</div>
	)
}

export default FXFund