import React from 'react';
import FundsComponent from '../../../components/funds/funds';

import { CECfundsItem } from '../info';

const CECFunds = () => {
	return (
		<div>
			<FundsComponent fundsItem={CECfundsItem}/>
		</div>
	)
}

export default CECFunds