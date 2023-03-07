import React from 'react';

import Chart from "react-apexcharts";

import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@emotion/react';

const StyledChart = styled(Box)(({ theme }) => ({

}));

const ReusableChart = ({chartData, id, xaxis, series}) => {
	const theme = useTheme()
	const PrimaryColor = theme.palette.primary.main
	const SecondaryColor = theme.palette.secondary.main
	const SuccessColor = theme.palette.success.main
	const WarningColor = theme.palette.warning.main
	const ErrorColor = theme.palette.error.main
	
	const chartOptions = {
		xaxis: {
			type: 'category',
			categories: chartData.categories,
			tickAmount: undefined,
			tickPlacement: 'on',
			min: undefined,
			max: undefined,
			range: undefined,
			floating: false,
			decimalsInFloat: undefined,
			overwriteCategories: undefined,
			position: 'bottom',
			labels: {
				show: true,
				rotate: -45,
				rotateAlways: false,
				hideOverlappingLabels: true,
				showDuplicates: false,
				trim: false,
				minHeight: undefined,
				maxHeight: 120,
				style: {
					colors: [],
					fontSize: '12px',
					fontFamily: "'varela round', sans-serif",
					fontWeight: 400,
					cssClass: 'apexcharts-xaxis-label',
				},
				offsetX: 0,
				offsetY: 0,
				format: undefined,
				formatter: undefined,
				datetimeUTC: true,
				datetimeFormatter: {
					year: 'yyyy',
					month: "MMM 'yy",
					day: 'dd MMM',
					hour: 'HH:mm',
				},
			},
			group: {
			  groups: [],
			  style: {
				colors: [],
				fontSize: '12px',
				fontWeight: 400,
				fontFamily: undefined,
				cssClass: ''
			  }
			},
			axisBorder: {
				show: true,
				color: '#78909C',
				height: 1,
				width: '100%',
				offsetX: 0,
				offsetY: 0
			},
			axisTicks: {
				show: true,
				borderType: 'solid',
				color: '#78909C',
				height: 6,
				offsetX: 0,
				offsetY: 0
			},
		   
			title: {
				text: undefined,
				offsetX: 0,
				offsetY: 0,
				style: {
					color: undefined,
					fontSize: '12px',
					fontFamily: "'varela round', sans-serif",
					fontWeight: 600,
					cssClass: 'apexcharts-xaxis-title',
				},
			},
			crosshairs: {
				show: true,
				width: 1,
				position: 'back',
				opacity: 0.9,        
				stroke: {
					color: '#b6b6b6',
					width: 0,
					dashArray: 0,
				},
				fill: {
					type: 'solid',
					color: '#B1B9C4',
					gradient: {
						colorFrom: '#D8E3F0',
						colorTo: '#BED1E6',
						stops: [0, 100],
						opacityFrom: 0.4,
						opacityTo: 0.5,
					},
				},
				dropShadow: {
					enabled: false,
					top: 0,
					left: 0,
					blur: 1,
					opacity: 0.4,
				},
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
				  fontSize: 0,
				  fontFamily: 0,
				},
			},
		},
		yaxis: {
			show: true,
			showAlways: true,
			showForNullSeries: true,
			seriesName: undefined,
			opposite: false,
			reversed: false,
			logarithmic: false,
			logBase: 10,
			tickAmount: 6,
			// min: 6,
			// max: 6,
			forceNiceScale: false,
			floating: false,
			decimalsInFloat: undefined,
			labels: {
				show: true,
				align: 'right',
				minWidth: 0,
				maxWidth: 160,
				style: {
					colors: [],
					fontSize: '12px',
					fontFamily: "'varela round', sans-serif",
					fontWeight: 400,
					cssClass: 'apexcharts-yaxis-label',
				},
				offsetX: 0,
				offsetY: 0,
				rotate: 0,
				formatter: (value) => { return value },
			},
			axisBorder: {
				show: true,
				color: '#78909C',
				offsetX: 0,
				offsetY: 0
			},
			axisTicks: {
				show: true,
				borderType: 'solid',
				color: '#78909C',
				width: 6,
				offsetX: 0,
				offsetY: 0
			},
			title: {
				text: "Y axis title here",
				rotate: -90,
				offsetX: 0,
				offsetY: 0,
				style: {
					color: undefined,
					fontSize: '12px',
					fontFamily: "'varela round', sans-serif",
					fontWeight: 600,
					cssClass: 'apexcharts-yaxis-title',
				},
			},
			crosshairs: {
				show: true,
				position: 'back',
				stroke: {
					color: '#b6b6b6',
					width: 1,
					dashArray: 0,
				},
			},
			tooltip: {
				enabled: true,
				offsetX: 0,
			},
			
		},
		tooltip: {
			enabled: true,
			enabledOnSeries: undefined,
			shared: true,
			followCursor: false,
			intersect: false,
			inverseOrder: false,
			custom: undefined,
			fillSeriesColor: false,
			theme: false,
			style: {
			  fontSize: '12px',
			  fontFamily: undefined
			},
			onDatasetHover: {
				highlightDataSeries: false,
			},
			x: {
				show: true,
				format: 'dd MMM',
				formatter: undefined,
			},
			y: {
				formatter: undefined,
				title: {
					formatter: (seriesName) => seriesName,
				},
			},
			z: {
				formatter: undefined,
				title: 'Size: '
			},
			marker: {
				show: true,
			},
			items: {
			   display: "flex",
			},
			fixed: {
				enabled: false,
				position: 'topRight',
				offsetX: 0,
				offsetY: 0,
			},
		},
		series: chartData.series,
		animations: {
			enabled: true,
			easing: 'easeinout',
			speed: 800,
			animateGradually: {
				enabled: true,
				delay: 150
			},
			dynamicAnimation: {
				enabled: true,
				speed: 350
			}
		},
		chart: {
			id: chartData.id,
			fontFamily: "'varela round', sans-serif",
			defaultLocale: 'en',
			locales: [{
				name: 'en',
				options: {
					months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					toolbar: {
						download: 'Download SVG',
						selection: 'Selection',
						selectionZoom: 'Selection Zoom',
						zoomIn: 'Zoom In',
						zoomOut: 'Zoom Out',
						pan: 'Panning',
						reset: 'Reset Zoom',
					}
				}
			}]
		},
		legend: {
			show: true,
			showForSingleSeries: false,
			showForNullSeries: true,
			showForZeroSeries: true,
			position: 'bottom',
			horizontalAlign: 'center', 
			floating: false,
			fontSize: '14px',
			fontFamily: "'varela round', sans-serif",
			fontWeight: 400,
			formatter: undefined,
			inverseOrder: false,
			width: undefined,
			height: undefined,
			tooltipHoverFormatter: undefined,
			customLegendItems: [],
			offsetX: 0,
			offsetY: 0,
			labels: {
				colors: undefined,
				useSeriesColors: false
			},
			markers: {
				width: 12,
				height: 12,
				strokeWidth: 0,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,
				customHTML: undefined,
				onClick: undefined,
				offsetX: 0,
				offsetY: 0
			},
			itemMargin: {
				horizontal: 5,
				vertical: 0
			},
			onItemClick: {
				toggleDataSeries: true
			},
			onItemHover: {
				highlightDataSeries: true
			},
		}
	}

	return (
		<StyledChart>
			<Chart
				options={chartOptions}
				series={chartData.series}
				type="line"
				width="100%"
			/>
			{console.log(chartData)}
		</StyledChart>
	)
}

export default ReusableChart