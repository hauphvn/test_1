import { useState, useEffect } from "react";
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
import { DATE_FORMAT } from "src/app/constant";
import { useDatePickerStyles } from "./Style";
import DateFnsUtils from "@date-io/date-fns";

export interface DatePickerProps {
	width?: string;
	minWidth?: string,
	value: ParsableDate;
	disableToolbar?: boolean;
	maxDate?: Date | null;
	minDate?: Date | null;
	format?: string;
	label?: string;
	variant?: "dialog" | "inline" | "static";
	borderRadius?: string;
	border?: string;
  onChange: (date: any, value?: string | null) => void;
}

export function DatePicker(props: DatePickerProps) {
	const { value, label, width, minDate, maxDate, onChange, borderRadius, border, minWidth } = props;
	const myClasses = useDatePickerStyles({width, minWidth});
	const [dateValue, setDateValue] = useState(value);
	const [maxDateState, setMaxDateState] = useState(maxDate);
	const [minDateState, setMinDateState] = useState(minDate);
	useEffect(() => {
		calMinDate();
	}, [])
	useEffect(() => {
		setDateValue(maxDate);
		setMaxDateState(maxDate)
	}, [maxDate])

	const handleDateChange = (date: Date | null) => {
		if (date instanceof Date && !isNaN(date.getTime())) {
			setDateValue(date);
			onChange(date);
		}
	};
	const calMinDate = () => {
		const today = new Date();
		today.setMonth(today.getMonth() - 6);
		setMinDateState(today);
	};
	return (
		<div className={myClasses.rootDatePicker}>
			<MuiPickersUtilsProvider
				utils={DateFnsUtils}>
					<KeyboardDatePicker
						minDate={minDateState}
						maxDate={maxDateState}
						disableFuture={true}
						InputProps={{
							disableUnderline: true,
						}}
						className={myClasses.content}
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						label={label}
						value={dateValue}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							classes: {
								root: myClasses.icon
							},
							'aria-label': 'change date'
						}}
					/>
			</MuiPickersUtilsProvider>
		</div>
	);
}

DatePicker.defaultProps = {
	format: DATE_FORMAT,
	variant: "dialog",
	width: 'auto',
};
