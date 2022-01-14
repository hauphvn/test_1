import { SelectOptionModel } from "../models/Select";
import { ItemColumnSearch } from "../models/ItemColumnSearch";
import { StoreModel } from "src/models";

export function searchRestaurant(searchText: string, filterSelected: string[]) {
	return new Promise<{ restaurantList: any[] }>((resolve) =>
		setTimeout(() => {
			resolve({
				restaurantList: [
					{
						stt: 1,
						id: "9727Aadw1",
						name: "StoreDetail A",
						email: "storeAA@gmail.com",
						status: "approved",
						address: "123 Main Street",
						phone: "2312-3124-2",
					},
					{
						stt: 2,
						id: "9727Aadw2",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "9727Aadw3",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
					{
						stt: 2,
						id: "211",
						name: "StoreDetail B",
						email: "storeBBA@gmail.com",
						status: "reject",
						address: "1232 Main Street",
						phone: "231ww2-3124-2",
					},
				],
			});
		}, 1000)
	);
}

export function getListOptionFilter() {
	return new Promise<{ optionsList: SelectOptionModel[] }>((resolve) =>
		setTimeout(() => {
			resolve({
				optionsList: [
					{
						name: "approved",
						value: "approvedStatus",
					},
					{
						name: "reject",
						value: "rejectStatus",
					},
					{
						name: "confirming",
						value: "confirmingStatus",
					},
					{
						name: "new",
						value: "newStatus",
					},
					{
						name: "block",
						value: "blockStatus",
					},
				],
			});
		}, 0)
	);
}

export function getListColumnOptions() {
	return new Promise<{ columnSearchList: ItemColumnSearch[] }>((resolve) =>
		setTimeout(() => {
			resolve({
				columnSearchList: [
					{
						value: 1,
						checked: false,
						text: "name",
					},
					{
						value: 2,
						checked: true,
						text: "id",
					},
					{
						value: 3,
						checked: false,
						text: "status",
					},
					{
						value: 4,
						checked: false,
						text: "email",
					},
					{
						value: 5,
						checked: false,
						text: "address",
					},
					{
						value: 6,
						checked: false,
						text: "phone",
					},
				],
			});
		}, 0)
	);
}

export function updateColumnSelected() {
	return new Promise<{ status: boolean }>((resolve) =>
		setTimeout(() => {
			resolve({ status: true });
		}, 500)
	);
}

export function getStoreInfo(storeId: string) {
	return new Promise<{ storeInfo: StoreModel }>((resolve) => {
		const storeInfo: StoreModel = {
			id: "001",
			name: "Store A",
			address: "123 Main Street",
			average: "100",
			email: "info@gmail.com",
			ownerAddress: "ownerAddress 123 Street",
			ownerBirthday: "12/09/1992",
			ownerId: "111",
			ownerName: "Owner Main",
			ownerPhone: "123123-1235",
			phone: "1111133333-44444",
			status: 1,
			taxCode: "123-124",
			despositPoint: 11,
			companyName: "CMC Global",
			secondPhone: '0359328676'
		};
		setTimeout(() => {
			resolve({ storeInfo });
		}, 500);
	});
}

export function updateStoreInfo(storeInfo: StoreModel) {
	return new Promise<{ storeInfo: StoreModel; status: string }>((resolve) => {
		setTimeout(() => {
			resolve({ storeInfo, status: "success" });
		}, 500);
	});
}
