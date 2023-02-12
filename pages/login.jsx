import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
	Typography,
	Container,
	Button,
	Paper,
	styled,
	Box,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { colors } from "@/components/color";
const Login = () => {
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("admin");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");
	const [pswError, setPswError] = useState("");
	const [loading, setLoading] = useState(false);
	const route = useRouter();
	const handleSubmit = async () => {};
	const handleChange = async (e) => {
		const name = e.target.name;
		if (name == "email") {
			handleEmail(e);
		}
	};
	const handleEmail = async (e) => {
		var emailVal = e.target.value;
		setEmail(emailVal);
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (regex.test(emailVal) === false) {
			setEmailError("Email is invalid");
		} else {
			setEmailError("");
		}
	};
	const SubmitButton = styled(Button)(({ theme }) => ({
		marginTop: 10,
		marginBottom: 10,
		width: "50ch",
		borderRadius: 20,
		backgroundColor: `${colors.bg}`,
		color: "white",
		"&:hover": {
			backgroundColor: `${colors.color}`,
		},
	}));
	return (
		<div>
			<Container>
				<Grid container spacing={2} marginTop={5}>
					<Grid
						item
						bgcolor={colors.bg}
						xs={0}
						sm={12}
						md={12}
						lg={6}
						display={{ xs: "none", sm: "block" }}
					>
						<Paper
							sx={{
								backgroundColor: `${colors.bg}`,
								margin: 10,
								padding: 10,
								boxShadow: `0.5rem 0.5rem ${colors.color}, -0.5rem -0.5rem ${colors.border}`,
							}}
						>
							<Typography
								variant="h2"
								component="h2"
								color={"white"}
							>
								Electro
							</Typography>
							;
							<Typography
								variant="p"
								component="p"
								color={"white"}
							>
								<span
									style={{
										color: `${colors.color}`,
										marginRight: 5,
										fontSize: 17,
										cursor: "pointer",
									}}
								>
									Login Now
								</span>
								to get details of consumption
							</Typography>
							;
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={12}
						lg={6}
						bgcolor="#F5F5F5"
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Box component="form">
							<div
								style={{
									paddingTop: 10,
									paddingBottom: 10,
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
								}}
							>
								<div>
									<FormControl
										variant="filled"
										sx={{ width: "50ch", marginBottom: 2 }}
									>
										<InputLabel id="demo-simple-select-label">
											Role
										</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={role}
											label="Role"
											onChange={handleChange}
										>
											<MenuItem value={"admin"}>
												Admin
											</MenuItem>
											<MenuItem value={"accounts"}>
												Accounts
											</MenuItem>
											<MenuItem value={"operations"}>
												Operations
											</MenuItem>
											<MenuItem value={"consumer"}>
												Consumer
											</MenuItem>
										</Select>
									</FormControl>
								</div>
								<div>
									<TextField
										variant="filled"
										sx={{ width: "50ch", marginBottom: 2 }}
										color="success"
										label="Email *"
										error={
											email != ""
												? emailError != ""
													? true
													: false
												: false
										}
										helperText={
											email != "" && emailError != ""
												? emailError
												: ""
										}
										name="email"
										value={email}
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div>
									<TextField
										variant="filled"
										sx={{ width: "50ch", marginBottom: 2 }}
										color="success"
										label="Password *"
										error={
											password != ""
												? pswError != ""
													? true
													: false
												: false
										}
										helperText={
											password != "" && pswError != ""
												? pswError
												: ""
										}
										name="psw"
										value={password}
										onChange={(e) => handleChange(e)}
									/>
								</div>

								<div>
									<SubmitButton
										variant="contained"
										endIcon={
											loading ? (
												<SyncOutlined spin size={15} />
											) : (
												<Send />
											)
										}
										onClick={() => handleSubmit()}
										disabled={loading}
									>
										Login
									</SubmitButton>
								</div>
								<div>
									Forgot Password?
									<Link className="link" href="/forgot">
										<Button
											variant="outlined"
											color="primary"
											sx={{
												borderRadius: 10,
												marginLeft: 2,
											}}
										>
											Click Here
										</Button>
									</Link>
								</div>
							</div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Login;
