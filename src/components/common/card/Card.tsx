import useStyle from './Style';
import {SvgIcon} from "@material-ui/core";
import React from "react";

export interface CardProps {
	backgroundIcon: string;
	name: string;
	icon: React.ElementType;
	onClick?: (value: any) => void
}

export function Card(props: CardProps) {
	const {backgroundIcon, name, icon, onClick} = props;
	const classes = useStyle();
	return (
		<div
			onClick={() => onClick ? onClick(name) : () => {}}
			className={classes.rootCard}>
			<div className={classes.iconWrraper} style={{backgroundColor: backgroundIcon}}>
				<div className={classes.iconBox}>
					<SvgIcon component={icon} style={{color: 'var(--color-white)'}}/>
				</div>
			</div>
			<div className={classes.text}>{name}</div>
		</div>
	);
}
