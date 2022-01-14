import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useStoreDashboardStyles } from "./Style";
import CommonButton from "src/components/common/Button/CommonButton";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { Select } from "src/components/common/Select";
import ColumnSearch from "src/components/search/ColumnSearch";
import { Table } from "src/components/common/Table";
import { Pagination } from "src/components/common/Pagination";
import {HeaderColumnLinkTo, TableHeaderModel} from "src/models/Table";
import { SelectOptionModel } from "src/models/Select";
import {
	listColumnSearch,
	listRestaurants,
	listOptionsFilter,
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
import {NAVIGATION_PATH} from "../../../app/constant";

export interface StoreDashboardProps {}

export function StoreDashboard(props: StoreDashboardProps) {
	const classes = useStoreDashboardStyles();
	const [searchText, setSearchText] = useState("");
	const [tableHeaders, setTableHeaders] = useState<TableHeaderModel[]>([]);
	const [listOptionFilterSelected, setListOptionFilterSelected] = useState<
		string[]
	>([]);
	const listOptionsFilterState: SelectOptionModel[] =
		useAppSelector(listOptionsFilter);
	const listRestaurantState: RestaurantModel[] =
		useAppSelector(listRestaurants);
	const dispatch = useAppDispatch();
	const listColumnSearchState: ItemColumnSearch[] =
		useAppSelector(listColumnSearch);
	const colLinkToList: HeaderColumnLinkTo[] = [
		{colName: 'name', path: NAVIGATION_PATH.STORE.INDEX, param: 'id'},
		{colName: 'status', path: '/store/detail/menu', param: 'id'},
	];
	useEffect(() => {
		dispatch(
			searchFilterAsync({
				searchText: searchText,
				filterSelected: listOptionFilterSelected,
			})
		);
		dispatch(getOptionsFilterSearchAsync());
		dispatch(getColumnSearchListAsync("storeId"));
	}, []);

	useEffect(() => {
		handleSetTableHeader(listColumnSearchState);
	}, [listColumnSearchState]);

	const handleColumnSelected = (columns: any) => {
		dispatch(updateColumnSelect(columns));
		handleSetTableHeader(listColumnSearchState);
		dispatch(updateRestaurantList());
	};

	const handleSearch = () => {
		dispatch(
			searchFilterAsync({
				searchText: searchText,
				filterSelected: listOptionFilterSelected,
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

	const handleAddRestaurant = () => {
		return;
	};

	const handleOnPageChange = () => {
		return;
	};
	return (
		<div className={classes.rootStore}>
			<Breadcrumbs title={"Store"} text={"Management all stores"} />
			<div className={classes.storeContainer}>
				<div className={classes.storeFilterHeader}>
					<div className={classes.headerCol}>
						<p className={classes.title}>Status</p>
						<Select
							options={listOptionsFilterState}
							onChangeOptions={(options) => {
								setListOptionFilterSelected(options);
							}}
							width="100%"
						/>
					</div>
					<div className={classes.headerCol}>
						<p className={classes.title}>Columns</p>
						<ColumnSearch
							onSelectedColumn={(columns) => {
								handleColumnSelected(columns);
							}}
							widthButtonSize="100%"
							dataOrigin={JSON.parse(JSON.stringify(listColumnSearchState))}
						/>
					</div>
					<div className={clsx(classes.headerCol, classes.filterInput)}>
						<p className={classes.title}>Start date</p>
						<TimeStartEnd
							widthStartDate="100%"
							widthEndDate="100%"
							containerWidth="100%"
							startEndMargin={13}
						/>
					</div>
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
				<div className={classes.storeTable}>
					<Table
						tableColumnLinksTo={colLinkToList}
						headers={tableHeaders}
						items={listRestaurantState} />
					<div className={classes.tablePagination}>
						<Pagination page={1} count={10} onChange={handleOnPageChange} />
					</div>
				</div>
			</div>
		</div>
	);
}
