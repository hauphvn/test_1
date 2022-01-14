import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { useTopBarStyles } from "./Style";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { isClassExpression } from "typescript";

export function TopBar() {
	const classes = useTopBarStyles();
	const navigate = useNavigate();
	const [notificationCount, setNotificationCount] = useState(1);
	const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(userMenuAnchor);
	const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };
	const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

	const handleLogout = () => {
		localStorage.removeItem('access_token');
		navigate('/login');
	}

	const renderMenu = (
    <Menu
      anchorEl={userMenuAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleUserMenuClose}
    >
      <MenuItem onClick={handleUserMenuClose}>User info</MenuItem>
      <MenuItem onClick={ handleLogout }>Logout</MenuItem>
    </Menu>
  );

	return (
		<div className={classes.topBarContainer}>
			<AppBar position="fixed" className={classes.topBar}>
				<Toolbar>
					<div className={classes.logoBox}>
						<Avatar
							variant="square"
							alt="Logo"
							src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
						/>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="primary"
							aria-label="open drawer"
						>
							<MenuIcon />
						</IconButton>
					</div>
					<div>
						<IconButton aria-label="show 17 new notifications" color="primary">
							<Badge badgeContent={ notificationCount } color="secondary">
								<NotificationsNoneIcon />
							</Badge>
						</IconButton>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-haspopup="true"
							onClick={handleUserMenuOpen}
							color="primary"
						>
							<AccountCircle />
						</IconButton>
					</div>
					{renderMenu}
				</Toolbar>
			</AppBar>
		</div>
	);
}
