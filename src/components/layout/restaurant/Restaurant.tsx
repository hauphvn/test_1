import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useStyles } from "./Style";
import CommonButton from 'src/components/common/Button/CommonButton';
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { SelectCheckBox } from "src/components/common/SelectCheckBox";
import ColumnSearch from "src/components/search/ColumnSearch";
import { Table } from "src/components/common/Table";
import { Pagination } from "src/components/common/Pagination";
import { TableHeaderModel } from "src/models/Table";
import { SelectOptionModel } from "src/models/Select";
import {
	listColumnSearch,
	listRestaurantsOriginal,
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

export interface RestaurantProps {
}

export function Restaurant(props: RestaurantProps) {
	const classes = useStyles();
	const [searchText, setSearchText] = useState("");
	const [tableHeaders, setTableHeaders] = useState<TableHeaderModel[]>([]);
	const [listOptionFilterSelected, setListOptionFilterSelected] = useState<string[]>([]);
	const listOptionsFilterState: SelectOptionModel[] = useAppSelector(listOptionsFilter);
	const listRestaurantState: RestaurantModel[] = useAppSelector(listRestaurants);
	const dispatch = useAppDispatch();
	const listColumnSearchState: ItemColumnSearch[] =
		useAppSelector(listColumnSearch);
	useEffect(() => {
		dispatch(
			searchFilterAsync({ searchText: searchText, filterSelected: listOptionFilterSelected })
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
			searchFilterAsync({ searchText: searchText, filterSelected: listOptionFilterSelected })
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
	}

	const handleOnPageChange = () => {
		return;
	}

	return (
		<>
			<div className={classes.restaurantWrapper}>
				<h1>Store</h1>
				<Box display="flex" justifyContent="space-between" mt={4}>
					<Box width="80%">
						<Box display="flex" alignItems="center">
							<div className={classes.searchInput}>
								<Input
									onChange={(e) => setSearchText(e.target.value)}
									value={searchText}
								/>
							</div>
							<CommonButton
								title={"search"}
								height="40px"
								onClick={handleSearch}
							/>
						</Box>
						<Box display="flex" width="40%" alignItems="center" mt={2}>
							<p className={classes.filterTitle}>Status filter</p>
							<SelectCheckBox
								options={listOptionsFilterState}
								onChangeOptions={(options) => {
									setListOptionFilterSelected(options);
								}}
								width={200}
							/>
						</Box>
					</Box>
					<Box display="flex" width="20%" justifyContent="space-between">
						<ColumnSearch
							onSelectedColumn={(columns) => {
								handleColumnSelected(columns);
							}}
							title={"Columns"}
							dataOrigin={JSON.parse(JSON.stringify(listColumnSearchState))}
						/>
						<CommonButton width={150} title={"Add store"} disable={true} onClick={handleAddRestaurant} />
					</Box>
				</Box>
				<div className={classes.tableContainer}>
					<Table
						headers={tableHeaders}
						items={listRestaurantState}
					/>
				</div>
				<Box display="flex" flexDirection="column" alignItems="flex-end" mt={2}>
					<Pagination page={1} count={10} onChange={ handleOnPageChange } />
				</Box>
			</div>
		</>
	);
}
