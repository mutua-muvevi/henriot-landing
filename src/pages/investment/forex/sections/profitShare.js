import { Box, Container, Grid, Stack, Typography,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	backgroundColor: theme.palette.background.neutral
}));

const TableHeadCell = styled(TableCell)(({ theme }) => ({
	backgroundColor: theme.palette.primary.halfOpacity,
}));

const StyledIconBox = styled(Box)(({ theme }) => ({
	border: "1px solid grey",
	borderRadius: "50%",
	padding: "10px",
	width: "70px",
	height: "70px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
}));

const ForexProfitShare = ({profitShare}) => {
	


	return (
		<StyledWrapper>
			<Container maxWidth="lg">
				<Stack direction="column" spacing={5}>
					<Typography variant="h3" color="text.primary">
						Profit Share
					</Typography>

					<TableContainer component={Paper}>
						<Table>
							<TableHead>
								<TableRow>
									{
										profitShare.table.head.map((el, i) => (
											<TableHeadCell>
												<Typography key={i} variant="h5" color="text.primary">
													{el}
												</Typography>
											</TableHeadCell>
										))
									}
								</TableRow>
							</TableHead>

							<TableBody>
								{profitShare.table.body.map((row, index) => (
									<TableRow key={index}>
										<TableCell>
											<Typography variant="h6" color="text.primary">
												{row.key}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="h6" color="text.secondary">
												{row.key}
											</Typography>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>

					{
						<Grid container spacing={3}>
							{
								profitShare.additionalContent.map((el, i) => (
									<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
										<Stack direction="row" spacing={3}>
											<div>
												<StyledIconBox>
													{el.icon}
												</StyledIconBox>
											</div>

											<Stack direction="column" spacing={1.5}>
												<Typography variant="h5" color="text.primary">
													{el.title}
												</Typography>
												<Typography variant="h6" color="text.secondary" style={{fontWeight:500}}>
													{el.caption}
												</Typography>
											</Stack>
										</Stack>
									</Grid>
								))
							}
						</Grid>
					}
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default ForexProfitShare