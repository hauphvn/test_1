import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useStoreCategoryStyles } from "./Style";
import CommonButton from "src/components/common/Button/CommonButton";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { Table } from "src/components/common/Table";
import { Pagination } from "src/components/common/Pagination";
import { TableHeaderModel } from "src/models/Table";
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

export interface StoreCategoryProps {}

export function StoreCategory(props: StoreCategoryProps) {
	const classes = useStoreCategoryStyles();
	const [searchText, setSearchText] = useState("");
	const [tableHeaders, setTableHeaders] = useState<TableHeaderModel[]>([]);
	
	const listRestaurantState: RestaurantModel[] =
		useAppSelector(listRestaurants);
	const dispatch = useAppDispatch();
	const listColumnSearchState: ItemColumnSearch[] =
		useAppSelector(listColumnSearch);

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

	return (
		<div className={classes.rootStoreCategory}>
			<Breadcrumbs title={"Category"} text={"Management all category"} />
			<div className={classes.storeCategoryContainer}>
				<div className={classes.storeCategoryFilterHeader}>
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
				<div className={classes.storeCategoryTable}>
					<Table headers={tableHeaders} items={listRestaurantState} />
					<div className={classes.tablePagination}>
						<Pagination page={1} count={10} onChange={handleOnPageChange} />
					</div>
				</div>
			</div>
		</div>
	);
}
