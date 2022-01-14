import React, { FC, useEffect, useState } from "react";
import useStyle from "./style";
import {
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from "../common/Input";
import CommonButton from "../common/Button/CommonButton";
import { ItemColumnSearch } from "../../models/ItemColumnSearch";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import clsx from "clsx";
type SearchBarProps = {
	dataOrigin: ItemColumnSearch[];
	title?: string;
	minWidth?: string;
	widthButtonSize?: string | number;
	placeHolderSearch?: string;
	onSelectedColumn?: (value: any) => void;
	backgroundColor?: string;
	textColor?: string
};
const ColumnSearch: FC<SearchBarProps> = ({
	dataOrigin,
	title,
	widthButtonSize,
	minWidth,
	placeHolderSearch,
	onSelectedColumn,
	backgroundColor,
	textColor
}) => {
	const classes = useStyle();
	const [listChecked, setListChecked] = useState([0]);
	const [dataSearch, setDataSearch] = useState<ItemColumnSearch[]>([]);
	const [inputSearch, setInputSearch] = useState("");
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		// @ts-ignore
		setDataSearch(dataOrigin);
		const dataCheckedList: any[] = [];
		dataOrigin.forEach((data) => {
			if (data.checked) {
				dataCheckedList.push(data.value);
			}
		});
		setListChecked(dataCheckedList);
	}, [dataOrigin]);
	useEffect(() => {}, [dataSearch, listChecked]);

	const handleInputSearch = (value: any) => {
		setInputSearch(value);
		const data = dataOrigin.filter((data) => {
			if (data.text.includes(value)) return data;
		});
		setDataSearch(data);
	};
	const handleSelectedList = (value: any) => () => {
		const index = dataOrigin.findIndex((data) => +data.value === +value);
		if (index > -1) {
			if (dataOrigin[index].checked) {
				dataOrigin[index].checked = !dataOrigin[index].checked;
				const indexChecked = listChecked.indexOf(value);
				const newCheckedList = [...listChecked];
				newCheckedList.splice(indexChecked, 1);
				setListChecked(newCheckedList);
			} else {
				dataOrigin[index].checked = !dataOrigin[index].checked;
				const newCheckedList = [...listChecked];
				newCheckedList.push(value);
				setListChecked(newCheckedList);
			}
		}
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleOK = () => {
		setOpen(false);
		const listDataChecked: any[] = [];
		dataOrigin.filter((data) => {
			if (data.checked) {
				listDataChecked.push(data);
			}
		});
		if (onSelectedColumn) {
			onSelectedColumn(listDataChecked);
		}
	};

	return (
		<div className={classes.rootColumnSearch}>
			<div>
				<CommonButton
					minWidth={minWidth}
					justifyContent={'space-between'}
					rightIcon={<ArrowDropDownIcon/>}
					boxShadow={'none'}
					fontWeight={'unset'}
					textColor={textColor}
					backgroundColor={backgroundColor}
					width={widthButtonSize}
					title={title}
					onClick={handleClickOpen}
				/>
				<Dialog
					fullWidth={true}
					maxWidth={"xs"}
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle>{title}</DialogTitle>
					<div className={classes.searchWrapper}>
						<Input
							placeholder={placeHolderSearch}
							value={inputSearch}
							onChange={(e) => handleInputSearch(e.target.value)}
						/>
						<SearchIcon />
					</div>
					<DialogContent className={classes.listDropdownWrapper}>
						<List>
							{dataSearch.map((data) => {
								return (
									<ListItem
										dense
										button
										key={data.value}
										onClick={handleSelectedList(data.value)}
									>
										<Checkbox
											style={{
												color: `${'var(--primary-color)'}`
											}}
											size={'small'}
											checked={listChecked.indexOf(data.value) > -1} />
										<ListItemText primary={data.text} />
									</ListItem>
								);
							})}
						</List>
					</DialogContent>
					<DialogActions>
						<CommonButton
							title={"OK"} onClick={handleOK} />
						<CommonButton
							title={"Cancel"} onClick={handleClose} />
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
};
ColumnSearch.defaultProps = {
	title: "Columns",
	placeHolderSearch: "Search",
	widthButtonSize: '157px',
	backgroundColor: 'var(--color-white)',
	textColor: 'var(--color-black)',
	minWidth: 'auto'
};
export default ColumnSearch;
