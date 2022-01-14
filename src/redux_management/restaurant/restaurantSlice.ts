import { SelectOptionModel } from "../../models/Select";
import { ItemColumnSearch } from "../../models/ItemColumnSearch";
import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { getListColumnOptions, getListOptionFilter, searchRestaurant, updateColumnSelected } from "../../api/restaurantApi";
import { RestaurantModel } from "src/models";

export interface RestaurantState {
	listRestaurantsOriginal: RestaurantModel[];
	listRestaurants: RestaurantModel[];
	filtersSearchSelected: SelectOptionModel[];
	listOptionsFilter: SelectOptionModel[];
	listColumnSearch: ItemColumnSearch[];
};

const initialState: RestaurantState = {
	listRestaurantsOriginal: [],
	listRestaurants: [],
	filtersSearchSelected: [],
	listOptionsFilter: [],
	listColumnSearch: [],
};

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
		updateColumnSelect: (state, action: PayloadAction<ItemColumnSearch[]>) => {
			const prevList = JSON.parse(JSON.stringify(current(state.listColumnSearch)))
			let flag = false;
			prevList.forEach((item: any) => {
				flag = false;
				action.payload.forEach((newItem: any) => {
					if (item.value === newItem.value) {
						flag = true;
						return;
					}
				})
				item.checked = flag;
			})
			state.listColumnSearch = prevList;
		},

		updateRestaurantList: (state) => {
			const headers = JSON.parse(JSON.stringify(state.listColumnSearch));
			const prevRestaurantList = JSON.parse(JSON.stringify((state.listRestaurantsOriginal)));
			const newRestaurantList: RestaurantModel[] = [];
			const listColName: string[] = [];
			headers.forEach((item: any) => {
				if (item.checked) {
					listColName.push(item.text);
				}
			});	
			prevRestaurantList.forEach((item: any) => {
				const restaurant: any = {};
				listColName.forEach((colName: any) => {
					restaurant[colName.toString()] = item[colName.toString()];
				})
				newRestaurantList.push(restaurant);
			});
			state.listRestaurants = newRestaurantList;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchFilterAsync.pending, (state) => {
				state.listRestaurantsOriginal = [];
			})
			.addCase(searchFilterAsync.fulfilled, (state, action) => {
				state.listRestaurantsOriginal = action.payload.restaurantList;
				restaurantSlice.caseReducers.updateRestaurantList(state);
			})
			.addCase(getOptionsFilterSearchAsync.pending, (state) => {
				state.listOptionsFilter = [];
			})
			.addCase(getOptionsFilterSearchAsync.fulfilled, (state, action) => {
				state.listOptionsFilter = action.payload.optionsList;
			})
			.addCase(getColumnSearchListAsync.pending, (state) => {
				state.listColumnSearch = [];
			})
			.addCase(getColumnSearchListAsync.fulfilled, (state, action) => {
				state.listColumnSearch = action.payload.columnSearchList;
			})
	}
});

export const getOptionsFilterSearchAsync = createAsyncThunk(
	"restaurant/getOptionFilterSearch",
	async () => {
		const response = await getListOptionFilter();
		return response;
	}
)
export const searchFilterAsync = createAsyncThunk(
	"restaurant/search",
	async (param: {
		searchText: string,
		filterSelected: string[]
	}) => {
		const response = await searchRestaurant(param.searchText, param.filterSelected);
		return response;
	}
)
export const getColumnSearchListAsync = createAsyncThunk(
	"restaurant/getColumnSearch",
	async (colName: string) => {
		const response = await getListColumnOptions();
		return response;
	}
)
export const updateColumnSelectedAsync = createAsyncThunk(
	"restaurant/updateColumnSelected",
	async () => {
		const response = await updateColumnSelected();
		return response;

	}
)

export const { updateColumnSelect, updateRestaurantList } = restaurantSlice.actions;
export default restaurantSlice.reducer;
