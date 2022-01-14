import React, { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useStoreTableStyles } from "./Style";
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
import TimeStartEnd from "src/components/common/TimeStartEnd/TimeStartEnd";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import {AlerDialog} from "../../../common/AlerDialog";
import EditIcon from "@material-ui/icons/Edit";
import {BUTTON_ACTION_TYPE} from "../../../../models/account";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {NAVIGATION_PATH} from "../../../../app/constant";
import {useNavigate} from "react-router-dom";

export interface StoreTableProps {}

export function StoreTable(props: StoreTableProps) {
	const classes = useStoreTableStyles();
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState("");
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [tableHeaders, setTableHeaders] = useState<TableHeaderModel[]>([]);

	const listRestaurantState: RestaurantModel[] =
		useAppSelector(listRestaurants);
	const dispatch = useAppDispatch();
	const listColumnSearchState: ItemColumnSearch[] =
		useAppSelector(listColumnSearch);
	const listActionTable: ActionItemRowTable[] = [{
		icon: <EditIcon/>,
		type: BUTTON_ACTION_TYPE.EDIT
	}, {
		icon: <DeleteOutlineIcon/>,
		type: BUTTON_ACTION_TYPE.DELETE
	}];
	useEffect(() => {
		handleSetTableHeader(listColumnSearchState);
		handleSearch();
	}, [listColumnSearchState]);

	const handleSearch = () => {
		dispatch(
			searchFilterAsync({
				searchText: searchText,
				filterSelected: []
			})
		);
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
			navigate(NAVIGATION_PATH.STORE.DETAIL_TABLE_EDIT);
		} else if (actionType === BUTTON_ACTION_TYPE.DELETE) {
			setOpenDeleteModal(true);
		}
	}

	return (
		<div className={classes.rootStoreTable}>
			<Breadcrumbs title={"Table"} text={"Management all table"} />
			<div className={classes.storeTableContainer}>
				<div className={classes.storeTableFilterHeader}>
					<div className={clsx(classes.headerCol, classes.filterInput)}>
						<p className={classes.title}></p>
						<div className={classes.input}>
							<Input
								onChange={(e) => setSearchText(e.target.value)}
								value={searchText}
								placeholder="Add content search here"
							/>
							<CommonButton
								leftIcon={<SearchIcon></SearchIcon>}
								onClick={handleSearch}
							/>
						</div>
					</div>
				</div>
				<div className={classes.storeTableTable}>
					<Table
						onActionClickedItem={handleAction}
						listActionItem={listActionTable}
						headers={tableHeaders}
						items={listRestaurantState} />
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
