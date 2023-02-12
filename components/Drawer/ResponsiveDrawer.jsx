import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
	AccessibilityNewOutlined,
	Dashboard,
	ElectricMeterOutlined,
	Logout,
	PersonAddAlt1Outlined,
	Receipt,
} from "@mui/icons-material";
import { colors } from "../color";
import Image from "next/image";
import Link from "next/link";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Image
				src={"/images/logo.png"}
				width={50}
				height={50}
				style={{ borderRadius: 50, padding: 4 }}
			/>
			{/* <Toolbar /> */}
			<Divider />
			<List>
				{[
					"Dashboard",
					"Roles",
					"Users",
					"Consumption",
					"Billing",
				].map((text, index) => (
					<Link
						className="link"
						href={
							index === 0
								? "/"
								: index === 1
								? "/user/roles"
								: index === 2
								? "/user/users"
								: index === 3
								? "/user/consumption"
								: "/user/billing"
						}
					>
						<ListItem
							key={text}
							disablePadding
							className={text === props.page && "active"}
						>
							<ListItemButton>
								<ListItemIcon>
									{index === 0 && (
										<Dashboard style={{ color: "white" }} />
									)}
									{index === 1 && (
										<AccessibilityNewOutlined
											style={{ color: "white" }}
										/>
									)}
									{index === 2 && (
										<PersonAddAlt1Outlined
											style={{ color: "white" }}
										/>
									)}
									{index === 3 && (
										<ElectricMeterOutlined
											style={{ color: "white" }}
										/>
									)}
									{index === 4 && (
										<Receipt style={{ color: "white" }} />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				{["Logout"].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Logout style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined
			? () => window().document.body
			: undefined;

	return (
		<Box sx={{ display: "flex" }}>
			{/* <CssBaseline /> */}
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar sx={{ backgroundColor: `${colors.bg}` }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Meter Consumption Analysis
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
				}}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: {
							xs: "block",
							sm: "none",
						},
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
