import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useStoreTableEditStyles } from "./Style";
import CommonButton from "src/components/common/Button/CommonButton";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { storeInfo as storeInfoSelector } from "src/redux_management/restaurant/selector";
import {
	getEditStoreInfoAsync,
	handleUpdateStoreInfoAsync,
} from "src/redux_management/restaurant/editStoreSlice";
import { StoreModel } from "src/models/store";

import {
	getColumnSearchListAsync,
	getOptionsFilterSearchAsync,
	searchFilterAsync,
	updateColumnSelect,
	updateRestaurantList,
} from "src/redux_management/restaurant/restaurantSlice";
import { Breadcrumbs } from "src/components/common/Breadcrumbs";
import CommonRadio from "src/components/common/Radio/CommonRadio";
import { AlerDialog } from "src/components/common/AlerDialog";
import { Select } from "src/components/common/Select";

export interface StoreTableEditProps {}

export function StoreTableEdit(props: StoreTableEditProps) {
	const classes = useStoreTableEditStyles();
	const storeInfoDefaultState: StoreModel = useAppSelector(storeInfoSelector);
	const [storeInfo, setStoreInfo] = useState<StoreModel>(storeInfoDefaultState);
	const [checkedTempValue, setCheckedTempValue] = useState(storeInfo.status);
	const [openModal, setOpenModal] = useState(false);
	const [groupName, setGroupName] = useState([]);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getEditStoreInfoAsync("01"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (storeInfoDefaultState?.id) {
			setStoreInfo(storeInfoDefaultState);
		}
	}, [storeInfoDefaultState]);

	const handleSave = () => {
		dispatch(handleUpdateStoreInfoAsync(storeInfo));
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleChangeStatus = () => {
		setStoreInfo({ ...storeInfo, status: checkedTempValue });
		setOpenModal(false);
	};

	const TableStatusItems = [
		{
			value: 1,
			text: "Active",
			isDisable: false,
		},
		{
			value: 2,
			text: "Inactive",
			isDisable: false,
		},
	];

	const GroupStatusItems = [
		{
			value: 1,
			text: "Normal",
			isDisable: false,
		},
		{
			value: 2,
			text: "Waiting",
			isDisable: false,
		},
		{
			value: 3,
			text: "Take away",
			isDisable: false,
		},
		{
			value: 4,
			text: "Delivery",
			isDisable: false,
		},
	];

	const GroupNameOptions = [
		{
			value: "1",
			name: "Group name 1",
		},
		{
			value: "2",
			name: "Group name 2",
		},
		{
			value: "3",
			name: "Group name 3",
		},
		{
			value: "4",
			name: "Group name 4",
		},
	];

	return (
		<div className={classes.rootStoreTableEdit}>
			<Breadcrumbs title={`Edit table`} text={`Change information table`} />
			<div className={classes.storeTableEditContainer}>
				<div className={classes.storeTableEditInfo}>
					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>
								Table name <span className={classes.required}>*</span>
							</p>
							<Input
								onChange={(e: any) =>
									setStoreInfo({ ...storeInfo, ownerName: e.target.value })
								}
								value={storeInfo.ownerName}
							/>
						</div>
					</div>

					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>Status</p>
							<CommonRadio
								listItems={TableStatusItems}
								defaultValue={storeInfo.status}
								onChecked={(e, value) => {
									setCheckedTempValue(value);
									setOpenModal(true);
								}}
								flexDirection="row"
							/>
						</div>
					</div>

					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>
								Group name <span className={classes.required}>*</span>
							</p>
							<Select
								width="100%"
								options={GroupNameOptions}
								onChangeOptions={(groupNames: any) => setGroupName(groupNames)}
							/>
						</div>
					</div>

					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>
								Number of seats <span className={classes.required}>*</span>
							</p>
							<Input
								onChange={(e: any) =>
									setStoreInfo({ ...storeInfo, ownerAddress: e.target.value })
								}
								value={storeInfo.ownerAddress}
							/>
						</div>
					</div>

					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>Status</p>
							<CommonRadio
								listItems={GroupStatusItems}
								defaultValue={storeInfo.status}
								onChecked={(e, value) => {
									setCheckedTempValue(value);
									setOpenModal(true);
								}}
								flexDirection="row"
							/>
						</div>
					</div>
					<div className={classes.saveButton}>
						<CommonButton title="Save" width="100%" onClick={handleSave} />
					</div>
				</div>
			</div>
			<AlerDialog
				handleOK={handleChangeStatus}
				open={openModal}
				handleClose={handleCloseModal}
				title="Confirm"
				message="Are you sure ?"
			/>
		</div>
	);
}
