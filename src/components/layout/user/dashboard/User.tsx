import useStyle from "./Style";
import {Box, Grid, Typography} from "@material-ui/core";
import { Input } from "../../../common/Input";
import ColumnSearch from "../../../search/ColumnSearch";
import { SelectOptionModel } from "../../../../models/Select";
import {CommonButton} from "../../../common/Button";
import { ItemColumnSearch } from "../../../../models/ItemColumnSearch";
import TimeStartEnd from "../../../common/TimeStartEnd/TimeStartEnd";
import {ActionItemRowTable, TableHeaderModel} from "../../../../models/Table";
import { User as UserModel } from "../../../../models";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
	listColumnSearch,
	listOptionsFilter,
	listUsersShowTable,
} from "src/redux_management/user/selector";
import React, { useEffect, useState } from "react";
import {
	getColumnSearchListAsync,
	getOptionsFilterSearchAsync,
	searchFilterAsync,
	updateColumnSelect,
	updateUserShowTable,
} from "../../../../redux_management/user/userSlice";
import { Table } from "../../../common/Table";
import { SelectCheckBox } from "../../../common/SelectCheckBox";
import {Breadcrumbs} from "../../../common/Breadcrumbs";
import {Select} from "../../../common/Select";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {Pagination} from "../../../common/Pagination";
import {AlerDialog} from "../../../common/AlerDialog";
import {BUTTON_ACTION_TYPE} from "../../../../models/account";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {NAVIGATION_PATH} from "../../../../app/constant";
import {useNavigate} from "react-router-dom";
export interface UserProps {}

export function User(props: UserProps) {
	const dispatch = useAppDispatch();
	const classes = useStyle();
	const navigate = useNavigate();
	const [inputSearch, setInputSearch] = useState("");
	const [filterBy, setFilterBy] = useState<string[]>([]);
	const [tableHeader, setTableHeader] = useState<TableHeaderModel[]>([]);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const listColumnSearchState: ItemColumnSearch[] =
		useAppSelector(listColumnSearch);
	const listUsersState: UserModel[] = useAppSelector(listUsersShowTable);
	const listOptionsFilterState: SelectOptionModel[] =
		useAppSelector(listOptionsFilter);
	const listActionTable: ActionItemRowTable[] = [{
		icon: <EditIcon/>,
		type: BUTTON_ACTION_TYPE.EDIT
	}, {
		icon: <DeleteOutlineIcon/>,
		type: BUTTON_ACTION_TYPE.DELETE
	}];
	useEffect(() => {
		dispatch(
			searchFilterAsync({ inputValue: inputSearch, filterBy: filterBy })
		);
		dispatch(getOptionsFilterSearchAsync());
		dispatch(getColumnSearchListAsync("userId"));
	}, []);
	useEffect(() => {
		setHeaderTable(listColumnSearchState);
	}, [listColumnSearchState]);
	const handleSearch = () => {
		dispatch(
			searchFilterAsync({ inputValue: inputSearch, filterBy: filterBy })
		);
	};
	const handleSelectedColumn = (columns: any) => {
		dispatch(updateColumnSelect(columns));
		setHeaderTable(listColumnSearchState);
		dispatch(updateUserShowTable());
	};
	const setHeaderTable = (columns: any[]) => {
		const newTabHeaders: TableHeaderModel[] = [];
		columns.map((column) => {
			if (column.checked) {
				const header: TableHeaderModel = {
					text: column.text,
					value: column.text,
				};
				newTabHeaders.push(header);
			}
		});
		newTabHeaders.push({value: 'action', text: 'Action'})
		setTableHeader(newTabHeaders);
	};
	const handleAddUser = () => {

	}

	const handleOnPageChange = () => {
		return;
	}


	function handleCloseModal() {
		setOpenDeleteModal(false);
	}

	function handleDeleteMenuItem() {
		setOpenDeleteModal(false);
	}

	const handleAction = (actionType: string, idItem: string) => {
		if (actionType === BUTTON_ACTION_TYPE.EDIT) {
			navigate(NAVIGATION_PATH.USER.EDIT);
		} else if (actionType === BUTTON_ACTION_TYPE.DELETE) {
			setOpenDeleteModal(true);
		}
	}
	return (
		<div className={classes.rootUserPage}>
			<div className={classes.breadcrumbWrapper}>
				<Breadcrumbs title={'User'} text={'Change information user'}/>
				<div>
					<CommonButton
						onClick={handleAddUser}
						title={"Add users"}
						leftIcon={<AddIcon/>}/>
				</div>
			</div>
			<div className={clsx(classes.content)}>
				<div className={clsx(classes.control)}>
					<div className={clsx(classes.item)}>
						<label className={classes.colTitle}>Status</label>
						<Select
							width={'100%'}
							border={'1px solid #D2D2D2'}
							borderRadius={'3px'}
							options={[{value: 'name', name: 'name 1'}]}
							onChangeOptions={(e) => {
								console.log(e)
							}}/>
					</div>
					<div className={clsx(classes.item)}>
						<label className={classes.colTitle}>Columns</label>
					<ColumnSearch
						onSelectedColumn={(columns) => {
							handleSelectedColumn(columns);
						}}
						title={"Columns"}
						dataOrigin={JSON.parse(JSON.stringify(listColumnSearchState))}
						widthButtonSize={'100%'}/>
					</div>
					<div className={clsx(classes.item, classes.timeWrapper)}>
						<TimeStartEnd
							fontWeightTitle={600}
							containerWidth={"350px"}
							widthStartDate="157px"
							widthEndDate="157px"
							labelEndDate={'End date'}
							labelStartDate={'Start date'}
						/>
					</div>
					<div className={clsx(classes.item)}>
						<label className={classes.colTitle}>Type user</label>
						<Select
							width={'100%'}
							border={'1px solid #D2D2D2'}
							borderRadius={'3px'}
							options={[{value: 'name', name: 'name 1'}]}
							onChangeOptions={(e) => {
								console.log(e)
							}}/>
					</div>
					<div  className={clsx(classes.lastItem)}>
						<label className={classes.colTitle}> &nbsp;</label>
						<div className={clsx(classes.searchWrapper)}>
						<Input
							width={'100%'}
							placeholder={'Add content search here'}
							onChange={(e) => setInputSearch(e.target.value)}
							value={inputSearch}
						/>
					<CommonButton
						width={'42px'}
						leftIcon={<SearchIcon/>}
						onClick={handleSearch}
					/>
						</div>
					</div>
				</div>
				<div className={classes.tableWrapper}>
					<Table
						onActionClickedItem={handleAction}
						listActionItem={listActionTable}
						headers={tableHeader}
						items={listUsersState} />
					<div className={classes.paginationWrapper}>
						<Pagination page={1} count={10} onChange={ handleOnPageChange } />
					</div>
				</div>
			</div>
			<AlerDialog
				handleOK={handleDeleteMenuItem}
				open={openDeleteModal}
				handleClose={handleCloseModal}
				title="Confirm"
				message="Are you sure ?"
			/>
		</div>
	);
}
