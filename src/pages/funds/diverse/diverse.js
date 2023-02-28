import React from 'react';
import FundsComponent from '../../../components/funds/funds';

import { diverseFundsItem } from '../info';

const DiverseFund = () => {
	return (
		<div>
			<FundsComponent fundsItem={diverseFundsItem}/>
		</div>
	)
}

export default DiverseFund