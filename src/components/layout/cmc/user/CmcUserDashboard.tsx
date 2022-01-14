import React, { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useCmcUserStyles } from "./Style";
import CommonButton from "src/components/common/Button/CommonButton";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { Table } from "src/components/common/Table";
import { Pagination } from "src/components/common/Pagination";
import {ActionItemRowTable, TableHeaderModel} from "src/models/Table";
import {
	listColumnSearch,
	listRestaurants,
} from "src/redux_management/restaurant/selector";

import {
	getColumnSearchListAsync,
	getOptionsFilterSearchAsync,
	searchFilterAsync,
	updateColumnSelect,
	updateRestaurantList,
} from "src/redux_management/restaurant/restaurantSlice";
import { ItemColumnSearch } from "src/models/ItemColumnSearch";
import { RestaurantModel } from "src/models";
import { Breadcrumbs } from "src/components/common/Breadcrumbs";
import AddIcon from "@material-ui/icons/Add";
import { useNavigate } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {AlerDialog} from "../../../common/AlerDialog";
import {BUTTON_ACTION_TYPE} from "../../../../models/account";
import {NAVIGATION_PATH} from "../../../../app/constant";
import { useHistory } from "react-router-dom";
export interface CmcUserDashboardProps {}

export function CmcUserDashboard(props: CmcUserDashboardProps) {
	const classes = useCmcUserStyles();
	const dispatch = useAppDispatch();
	const [searchText, setSearchText] = useState("");
	const history = useHistory();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [tableHeaders, setTableHeaders] = useState<TableHeaderModel[]>([]);
	const navigate = useNavigate();
	const listRestaurantState: RestaurantModel[] =
		useAppSelector(listRestaurants);
	const listColumnSearchState: ItemColumnSearch[] =
		useAppSelector(listColumnSearch);
	const listActionTable: ActionItemRowTable[] = [{
		icon: <EditIcon/>,
		type: BUTTON_ACTION_TYPE.EDIT
	}, {
		icon: <DeleteOutlineIcon/>,
		type: BUTTON_ACTION_TYPE.DELETE
	}];
	const tableItems = [
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
		{
			stt: "1",
			name: "Trần Đức Bo",
			password: "***********",
			gender: "Other",
			role: "AAA123",
			phone: "11323321312",
		},
	];

	useEffect(() => {
		handleSetTableHeader(listColumnSearchState);
		setTableHeaders([
			{
				text: "STT",
				value: "stt",
			},
			{
				text: "Full Name",
				value: "name",
			},
			{
				text: "Password",
				value: "password",
			},
			{
				text: "Gender",
				value: "gender",
			},
			{
				text: "Role",
				value: "role",
			},
			{
				text: "Phone",
				value: "phone",
				width: 200
			},
			{
				text: "Action",
				value: "action",
				align: "center",
				width: 100
			},
		]);
	}, [listColumnSearchState]);

	const handleAddUser = () => {
		history.push(NAVIGATION_PATH.USER_CMC.ADD_NEW);
	};
	const handleSetTableHeader = (columns: any[]) => {
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
		setTableHeaders(newTabHeaders);
	};

	const handleOnPageChange = () => {
		return;
	};

	function handleCloseModal() {
		setOpenDeleteModal(false);
	}

	function handleDeleteMenuItem() {
		setOpenDeleteModal(false);
	}

	const handleAction = (actionType: string, idItem: string) => {
		if (actionType === BUTTON_ACTION_TYPE.EDIT) {
			navigate(NAVIGATION_PATH.USER_CMC.EDIT);
		} else if (actionType === BUTTON_ACTION_TYPE.DELETE) {
			setOpenDeleteModal(true);
		}
	}
	return (
		<div className={classes.rootCmcUser}>
			<div className={classes.userDashboardHeader}>
				<Breadcrumbs title={"Users CMC"} text={"Change setting store"} />
				<CommonButton
					onClick={handleAddUser}
					title={"Add users"}
					leftIcon={<AddIcon />}
				/>
			</div>
			<div className={classes.cmcUserContainer}>
				<div className={classes.cmcUserTable}>
					<Table
						onActionClickedItem={handleAction}
						listActionItem={listActionTable}
						headers={tableHeaders}
						items={tableItems}
						/>
					<div className={classes.tablePagination}>
						<Pagination page={1} count={10} onChange={handleOnPageChange} />
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
