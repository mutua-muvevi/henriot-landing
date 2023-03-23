import investmentEquityTypes from "../types/equity";

export const chooseData = (data) => ({
	type: investmentEquityTypes.SELECT_EQUITY_DATA,
	payload: data
});

//functions
export const selectData = (data) => {
	return (dispatch) => {
		try {
			console.log(data)
			dispatch(chooseData(data))
		} catch (error) {
			dispatch(chooseData(error))
		}
	}
}

// export const MarketDisruptor = (marketDisRuptor) => ({
// 	type: investmentEquityTypes.SELECT_MARKET_DISRUPTOR,
// });

// export const DnaGameChanger = (dnaGameChanger) => ({
// 	type: investmentEquityTypes.SELECT_DNA_GAME_CHANGER,
// });

// export const FinanceFrontier = (financeFrontier) => ({
// 	type: investmentEquityTypes.SELECT_FINANCE_FRONTIER,
// });

// export const FutureFabrication = (futureFabrication) => ({
// 	type: investmentEquityTypes.SELECT_FUTURE_FABRICATION,
// });

// export const CryptoCraze = (cryptoCraze) => ({
// 	type: investmentEquityTypes.SELECT_CRYPTO_CRAZE,
// });

// export const AugmentedReality = (augmentedReality) => ({
// 	type: investmentEquityTypes.SELECT_AUGMENTED_REALITY,
// });

// export const DecentralizedWeb3 = (decentralizedWeb3) => ({
// 	type: investmentEquityTypes.SELECT_DECENTRALIZED_WEB_3,
// });

// export const IntelligentMachine = (intelligentMachine) => ({
// 	type: investmentEquityTypes.SELECT_INTELLIGENT_MACHINES,
// });

// export const GalacticAdventure = (galacticAdventure) => ({
// 	type: investmentEquityTypes.SELECT_GALACTIC_ADVENTURE,
// });

// export const SiliconWadi= (siliconWadi) => ({
// 	type: investmentEquityTypes.SELECT_SILICON_WADI,
// });

// export const DigitalGold = (digitalGold) => ({
// 	type: investmentEquityTypes.SELECT_DIGITAL_GOLD,
// });

// export const FutureUnicorns = (futureUnicorns) => ({
// 	type: investmentEquityTypes.SELECT_FUTURE_UNICORNS,
// });

// export const OnDemandMobility = (onDemandMobility) => ({
// 	type: investmentEquityTypes.SELECT_ON_DEMAND_MOBILITY,
// });

// export const SustainableInvestment = (sustainableInvestment) => ({
// 	type: investmentEquityTypes.SELECT_SUSTAINABLE_INVESTMENT,
// });

// export const OtherFunds = (otherFunds) => ({
// 	type: investmentEquityTypes.SELECT_OTHER_FUNDS,
// });



// export const selectMarketDisruptor = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(MarketDisruptor(data))
// 		} catch (error) {
// 			dispatch(MarketDisruptor(error))
// 		}
// 	}
// }

// export const selectDnaGameChanger = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(DnaGameChanger(data))
// 		} catch (error) {
// 			dispatch(DnaGameChanger(error))
// 		}
// 	}
// }

// export const selectFinanceFrontier = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(FinanceFrontier(data))
// 		} catch (error) {
// 			dispatch(FinanceFrontier(error))
// 		}
// 	}
// }

// export const selectFutureFabrication = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(FutureFabrication(data))
// 		} catch (error) {
// 			dispatch(FutureFabrication(error))
// 		}
// 	}
// }

// export const selectCryptoCraze = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(CryptoCraze(data))
// 		} catch (error) {
// 			dispatch(CryptoCraze(error))
// 		}
// 	}
// }

// export const selectAugmentedReality = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(AugmentedReality(data))
// 		} catch (error) {
// 			dispatch(AugmentedReality(error))
// 		}
// 	}
// }

// export const selectDecentralizedWeb3 = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(DecentralizedWeb3(data))
// 		} catch (error) {
// 			dispatch(DecentralizedWeb3(error))
// 		}
// 	}
// }

// export const selectIntelligentMachine = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(IntelligentMachine(data))
// 		} catch (error) {
// 			dispatch(IntelligentMachine(error))
// 		}
// 	}
// }

// export const selectGalacticAdventure = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(GalacticAdventure(data))
// 		} catch (error) {
// 			dispatch(GalacticAdventure(error))
// 		}
// 	}
// }

// export const selectSiliconWadi = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(SiliconWadi(data))
// 		} catch (error) {
// 			dispatch(SiliconWadi(error))
// 		}
// 	}
// }

// export const selectDigitalGold = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(DigitalGold(data))
// 		} catch (error) {
// 			dispatch(DigitalGold(error))
// 		}
// 	}
// }

// export const selectFutureUnicorns = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(FutureUnicorns(data))
// 		} catch (error) {
// 			dispatch(FutureUnicorns(error))
// 		}
// 	}
// }

// export const selectOnDemandMobility = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(OnDemandMobility(data))
// 		} catch (error) {
// 			dispatch(OnDemandMobility(error))
// 		}
// 	}
// }

// export const selectSustainableInvestment= (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(SustainableInvestment(data))
// 		} catch (error) {
// 			dispatch(SustainableInvestment(error))
// 		}
// 	}
// }

// export const selectOtherFunds = (data) => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(OtherFunds(data))
// 		} catch (error) {
// 			dispatch(OtherFunds(error))
// 		}
// 	}
// }

