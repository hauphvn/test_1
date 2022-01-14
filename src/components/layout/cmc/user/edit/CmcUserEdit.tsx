import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useCmcUserEditStyles } from "./Style";
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
import { useNavigate, useLocation } from "react-router-dom";
import { DatePicker } from "src/components/common/DatePicker";

export interface StoreTableEditProps {}

export function CmcUserEdit(props: StoreTableEditProps) {
	const classes = useCmcUserEditStyles();
	const storeInfoDefaultState: StoreModel = useAppSelector(storeInfoSelector);
	const [storeInfo, setStoreInfo] = useState<StoreModel>(storeInfoDefaultState);
	const [checkedTempValue, setCheckedTempValue] = useState(storeInfo.status);
	const [isEdit, setIsEdit] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [groupName, setGroupName] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getEditStoreInfoAsync("01"));
		if (location.pathname.includes("/edit")) {
			setIsEdit(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (storeInfoDefaultState?.id && isEdit) {
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

	const GenderItems = [
		{
			value: 1,
			text: "Nam",
			isDisable: false,
		},
		{
			value: 2,
			text: "3D",
			isDisable: false,
		},
	];

	const RoleOptions = [
		{
			value: "1",
			name: "Role 1",
		},
		{
			value: "2",
			name: "Role 2",
		},
		{
			value: "3",
			name: "Role 2",
		},
		{
			value: "4",
			name: "Role 4",
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
		<div className={classes.rootCmcUserEdit}>
			<Breadcrumbs
				title={isEdit ? storeInfo.name : "Add CMC user"}
				text={isEdit ? "Edit user information" : "Add CMC user"}
			/>
			<div className={classes.cmcUserEditContainer}>
				<div className={classes.cmcUserEditInfo}>
					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>
								Fullname <span className={classes.required}>*</span>
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
								Username <span className={classes.required}>*</span>
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
							<p className={classes.title}>
								Password <span className={classes.required}>*</span>
							</p>
							<Input
								type="password"
								onChange={(e: any) =>
									setStoreInfo({ ...storeInfo, ownerName: e.target.value })
								}
								value={storeInfo.ownerName}
							/>
						</div>
					</div>

					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>Gender</p>
							<CommonRadio
								listItems={GenderItems}
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
							<p className={classes.title}>Birthday</p>
							<DatePicker
								width="100%"
								value={new Date(storeInfo.ownerBirthday)}
								onChange={(date: any) => ({})}
							/>
						</div>
					</div>

					<div>
						<div className={classes.contentRow}>
							<p className={classes.title}>Phone</p>
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
							<p className={classes.title}>
								Role<span className={classes.required}>*</span>
							</p>
							<Select
								width="100%"
								options={RoleOptions}
								onChangeOptions={() => ({})}
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
