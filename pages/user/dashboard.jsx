import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid } from "@mui/material";
import Calendar from "react-calendar";
import dynamic from "next/dynamic";
// components/MyChart.js contains the recharts chart
const Chart = dynamic(
	() => import("../../components/Chart/Chart"),
	{
		ssr: false,
	}
);
const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Grid container spacing={2}>
				{["teal", "green", "lightblue"]?.map(
					(item, index) => (
						<Grid
							item
							key={index}
							xs={12}
							sm={12}
							md={4}
							lg={4}
						>
							<Card
								sx={{
									display: "flex",
									backgroundColor: `${item}`,
								}}
							>
								<CardMedia
									component="img"
									sx={{ width: 151 }}
									image="/images/logo.png"
									alt="Live from space album cover"
								/>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardContent sx={{ flex: "1 0 auto" }}>
										<Typography
											component="div"
											variant="h5"
										>
											Live From Space
										</Typography>
										<Typography
											variant="subtitle1"
											color="text.secondary"
											component="div"
										>
											Mac Miller
										</Typography>
									</CardContent>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											pl: 1,
											pb: 1,
										}}
									>
										<IconButton aria-label="previous">
											<SkipPreviousIcon />
										</IconButton>
										<IconButton aria-label="play/pause">
											<PlayArrowIcon
												sx={{ height: 38, width: 38 }}
											/>
										</IconButton>
										<IconButton aria-label="next">
											<SkipPreviousIcon />
										</IconButton>
									</Box>
								</Box>
							</Card>
						</Grid>
					)
				)}
			</Grid>
			<Grid
				container
				spacing={2}
				marginTop={2}
				marginBottom={2}
			>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Chart />
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Calendar value={new Date()} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;
