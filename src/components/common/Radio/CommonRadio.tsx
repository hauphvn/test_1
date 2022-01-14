import {ChangeEvent, FC, useEffect, useState} from "react";
import useStyle from "./style";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioProps, Typography} from "@material-ui/core";
import clsx from "clsx";

type Props = {
	fontSize?: string,
	defaultValue: number,
	flexDirection?: 'column' | 'row',
	groupName?: string,
	listItems?: any[],
	onChecked: (event: ChangeEvent<HTMLInputElement>, item: any) => void;
}

function StyledRadio(props: RadioProps) {
	const classes = useStyle();
	return (
		<Radio
			className={classes.rootRadio}
			disableRipple
			color="default"
			checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
			icon={<span className={classes.icon} />}
			{...props}
		/>
	);
}

const CommonRadio: FC<Props> = (
	{
		fontSize,
		defaultValue,
		groupName,
		listItems,
		onChecked,
		flexDirection
	}
) => {
	// @ts-ignore
	const classes = useStyle();
	const [value, setValue] = useState<number>(0);
	useEffect(() => {
		// @ts-ignore
		if (listItems?.length > 0) {
			// @ts-ignore
			setValue(defaultValue);
		}
	}, [defaultValue]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const valueSelected = +(event.target as HTMLInputElement).value;
		// @ts-ignore
		const item = listItems?.filter(el =>  el.value === valueSelected);
		onChecked(event, item && item[0].value);
	};
	return (
		<div className={classes.rootRadio}>
			<FormControl
				component="fieldset">
				<FormLabel component="legend">{groupName}</FormLabel>
				<RadioGroup
					onChange={handleChange}
					value={value}
					style={{flexDirection: flexDirection}}>
					{listItems?.map((item) => (
						<FormControlLabel
							key={item.value}
							disabled={item.isDisable}
							value={item.value}
							control={<Radio style={{color: 'var( --primary-color)'}}/>}
							label={<Typography style={{fontSize: fontSize}}>{item.text}</Typography>}/>
					))}
				</RadioGroup>
			</FormControl>
		</div>
	)
}

// control={<StyledRadio onChange={(e) => {
// 	setValue(item.value);
// 	return onChecked(e, item.value);
// }} />}
CommonRadio.defaultProps = {
	flexDirection: 'column',
	groupName: undefined,
	listItems: [],
	defaultValue: 0,
	fontSize: '12px'
}

export default CommonRadio;
