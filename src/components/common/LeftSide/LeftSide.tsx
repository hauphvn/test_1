import { useState } from "react";
import { useLeftSideStyles } from "./Style";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StoreIcon from "@material-ui/icons/Store";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SettingsIcon from "@material-ui/icons/Settings";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Grid, Paper, Typography } from "@material-ui/core";
import {NAVIGATION_PATH} from "../../../app/constant";

const leftMenuItems: any = [
	{
		name: "Stores",
		icon: <StoreIcon></StoreIcon>,
		path: NAVIGATION_PATH.STORE.INDEX,
	},
	{
		name: "Customers",
		icon: <PersonIcon></PersonIcon>,
		path: NAVIGATION_PATH.USER.INDEX,
	},
	{
		name: "Users CMC",
		icon: <AssignmentIndIcon></AssignmentIndIcon>,
		path: NAVIGATION_PATH.USER_CMC.INDEX,
	},
	{
		name: "Setting CMC",
		icon: <SettingsIcon></SettingsIcon>,
		path: NAVIGATION_PATH.SETTING_CMC.INDEX,
	},
];

export function LeftSide(props: any) {
	const classes = useLeftSideStyles();
	const navigate = useNavigate();
	const [selectedItem, setSelectedItem] = useState(leftMenuItems[0]);

	const handleListItemClick = (path: any) => {
		setSelectedItem({ ...selectedItem, path: path });
		navigate(path);
	};

	return (
		<div className={classes.appContainer}>
			<Grid container>
				<Grid item sm={2}>
					<div className={classes.leftSideContainer}>
						<List component="nav">
							{leftMenuItems.map((item: any, index: number) => {
								return (
									<ListItem
										key={index}
										button
										selected={item.path === selectedItem.path}
										onClick={(event) => handleListItemClick(item.path)}
									>
										{<ListItemIcon>{item.icon}</ListItemIcon>}
										<ListItemText primary={item.name} />
									</ListItem>
								);
							})}
						</List>
					</div>
				</Grid>
				<Grid item sm={10}>
					<div className={classes.contentContainer}>{props.children}</div>
				</Grid>
			</Grid>
		</div>
	);
}
