import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useStoreEditStyles } from "./Style";
import CommonButton from "src/components/common/Button/CommonButton";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import {
	storeInfo as storeInfoSelector,
} from "src/redux_management/restaurant/selector";
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
import { ItemColumnSearch } from "src/models/ItemColumnSearch";
import { Breadcrumbs } from "src/components/common/Breadcrumbs";
import SaveIcon from "@material-ui/icons/Save";
import CommonRadio from "src/components/common/Radio/CommonRadio";
import { Card, IconButton } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { DatePicker } from "src/components/common/DatePicker";
import { toYYYYMMDD } from "src/ultils/date";
import { AlerDialog } from "src/components/common/AlerDialog";

export interface StoreEditProps {}

export function StoreEdit(props: StoreEditProps) {
	const classes = useStoreEditStyles();
	const storeInfoDefaultState: StoreModel = useAppSelector(storeInfoSelector);
	const [storeInfo, setStoreInfo] = useState<StoreModel>(storeInfoDefaultState);
	const [checkedTempValue, setCheckedTempValue] = useState(storeInfo.status);
	const [openModal, setOpenModal] = useState(false);
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

	const handleChangeDate = (date: any) => {
		setStoreInfo({...storeInfo, ownerBirthday: toYYYYMMDD(date)});
		console.log(storeInfo);
	};

	const handleSubmit = () => {
		dispatch(handleUpdateStoreInfoAsync(storeInfo));
	};

	const handleCloseModal = () => {
    setOpenModal(false);
  }

	const handleChangeStatus = () => {
		setStoreInfo({ ...storeInfo, status: checkedTempValue });
    setOpenModal(false);
  }

	const statusItems = [
		{
			value: 1,
			text: "Approve",
			isDisable: false,
		},
		{
			value: 2,
			text: "Reject",
			isDisable: false,
		},
		{
			value: 3,
			text: "Confirming",
			isDisable: false,
		},
		{
			value: 4,
			text: "New",
			isDisable: false,
		},
		{
			value: 5,
			text: "Block",
			isDisable: false,
		},
	];

	return (
		<div className={classes.rootStoreEdit}>
			<Breadcrumbs title={storeInfo.name} text={`Store ID: ${storeInfo.id}`} />
			<div className={classes.storeEditContainer}>
				<div className={classes.storeEditHeader}>
					<CommonButton
						leftIcon={<SaveIcon></SaveIcon>}
						title="Save"
						onClick={handleSubmit}
					/>
				</div>
				<div className={classes.storeEditInfo}>
					<div>
						<span className={classes.titleInfo}>Customer Information</span>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>
									Customer name <span className={classes.required}>*</span>
								</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, ownerName: e.target.value })
									}
									value={storeInfo.ownerName}
								/>
							</div>
							<div className={classes.contentRow}>
								<p className={classes.title}>
									ID card no <span className={classes.required}>*</span>
								</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, ownerId: e.target.value })
									}
									value={storeInfo.ownerId}
								/>
							</div>
						</div>
					</div>

					<div>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>Status</p>
								<CommonRadio
									listItems={statusItems}
									defaultValue={storeInfo.status}
									onChecked={(e, value) => {
										setCheckedTempValue(value)
										setOpenModal(true)
									}}
									flexDirection="row"
								/>
							</div>
							<div className={classes.contentRow}></div>
						</div>
					</div>

					<div>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>ID front</p>
								<Card className={classes.uploadImageCard}>
									<IconButton
										edge="start"
										className={classes.uploadIcon}
										color="primary"
										aria-label="open drawer"
									>
										<CameraAltIcon />
									</IconButton>
								</Card>
							</div>
							<div className={classes.contentRow}>
								<p className={classes.title}>ID back</p>
								<Card className={classes.uploadImageCard}>
									<IconButton
										edge="start"
										className={classes.uploadIcon}
										color="primary"
										aria-label="open drawer"
									>
										<CameraAltIcon />
									</IconButton>
								</Card>
							</div>
						</div>
					</div>

					<div>
						<div>
							<div className={classes.contentCol}>
								<div className={classes.contentRow}>
									<p className={classes.title}>
										Birthday <span className={classes.required}>*</span>
									</p>
									<DatePicker
										width="100%"
										value={new Date(storeInfo.ownerBirthday)}
										onChange={(date: any) =>
											{handleChangeDate(date)}
										}
									/>
								</div>
								<div className={classes.contentRow}>
									<p className={classes.title}>
										Phone number <span className={classes.required}>*</span>
									</p>
									<Input
										onChange={(e: any) =>
											setStoreInfo({ ...storeInfo, ownerPhone: e.target.value })
										}
										value={storeInfo.ownerPhone}
									/>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>
									Address <span className={classes.required}>*</span>
								</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, ownerAddress: e.target.value })
									}
									value={storeInfo.ownerAddress}
								/>
							</div>
							<div className={classes.contentRow}>
								<p className={classes.title}>Desposit point</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({
											...storeInfo,
											despositPoint: e.target.value,
										})
									}
									value={storeInfo.despositPoint.toString()}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className={classes.storeEditInfo}>
					<div>
						<span className={classes.titleInfo}>Store Information</span>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>Company name</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, name: e.target.value })
									}
									value={storeInfo.companyName}
								/>
							</div>
							<div className={classes.contentRow}>
								<p className={classes.title}>Taxcode</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, taxCode: e.target.value })
									}
									value={storeInfo.taxCode}
								/>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div className={classes.contentCol}>
								<div className={classes.contentRow}>
									<p className={classes.title}>
										Store name <span className={classes.required}>*</span>
									</p>
									<Input
										onChange={(e: any) =>
											setStoreInfo({ ...storeInfo, name: e.target.value })
										}
										value={storeInfo.name}
									/>
								</div>
								<div className={classes.contentRow}>
									<p className={classes.title}>
										Address <span className={classes.required}>*</span>
									</p>
									<Input
										onChange={(e: any) =>
											setStoreInfo({ ...storeInfo, address: e.target.value })
										}
										value={storeInfo.address}
									/>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>
									Phone number 1 <span className={classes.required}>*</span>
								</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, phone: e.target.value })
									}
									value={storeInfo.phone}
								/>
							</div>
							<div className={classes.contentRow}>
								<p className={classes.title}>Phone number 2</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, secondPhone: e.target.value })
									}
									value={storeInfo.secondPhone}
								/>
							</div>
						</div>
					</div>

					<div>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>Avenue revenue/ day</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, average: e.target.value })
									}
									value={storeInfo.average}
								/>
							</div>
							<div className={classes.contentRow}></div>
						</div>
					</div>
				</div>
				<div className={classes.storeEditInfo}>
					<div>
						<span className={classes.titleInfo}>Store Information</span>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>Company name</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, name: e.target.value })
									}
									value={storeInfo.companyName}
								/>
							</div>
							<div className={classes.contentRow}>
								<p className={classes.title}>Taxcode</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, taxCode: e.target.value })
									}
									value={storeInfo.taxCode}
								/>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div className={classes.contentCol}>
								<div className={classes.contentRow}>
									<p className={classes.title}>
										Store name <span className={classes.required}>*</span>
									</p>
									<Input
										onChange={(e: any) =>
											setStoreInfo({ ...storeInfo, name: e.target.value })
										}
										value={storeInfo.name}
									/>
								</div>
								<div className={classes.contentRow}>
									<p className={classes.title}>
										Address <span className={classes.required}>*</span>
									</p>
									<Input
										onChange={(e: any) =>
											setStoreInfo({ ...storeInfo, address: e.target.value })
										}
										value={storeInfo.address}
									/>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>
									Phone number 1 <span className={classes.required}>*</span>
								</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, phone: e.target.value })
									}
									value={storeInfo.phone}
								/>
							</div>
							<div className={classes.contentRow}>
								<p className={classes.title}>Phone number 2</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, secondPhone: e.target.value })
									}
									value={storeInfo.secondPhone}
								/>
							</div>
						</div>
					</div>

					<div>
						<div className={classes.contentCol}>
							<div className={classes.contentRow}>
								<p className={classes.title}>Avenue revenue/ day</p>
								<Input
									onChange={(e: any) =>
										setStoreInfo({ ...storeInfo, average: e.target.value })
									}
									value={storeInfo.average}
								/>
							</div>
							<div className={classes.contentRow}></div>
						</div>
					</div>
				</div>
			</div>
			<AlerDialog
        handleOK={handleChangeStatus}
        open={openModal}
        handleClose={handleCloseModal}
        title='Confirm'
        message='Are you sure ?'
      />
		</div>
	);
}
