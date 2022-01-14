import { Box, InputLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useEditStoreStyles } from "./Style";
import CommonButton from 'src/components/common/Button/CommonButton';
import { DatePicker } from "src/components/common/DatePicker";
import CommonRadio from "src/components/common/Radio/CommonRadio";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { TableHeaderModel } from "src/models/Table";

import { storeInfo as storeInfoSelector } from "src/redux_management/restaurant/selector";
import {
	getEditStoreInfoAsync,
	handleUpdateStoreInfoAsync,
} from "src/redux_management/restaurant/editStoreSlice";
import { StoreModel } from "src/models/store";

export interface EditStoreProps {
}

export function EditStore(props: EditStoreProps) {
	const classes = useEditStoreStyles();
	const storeInfoDefaultState: StoreModel = useAppSelector(storeInfoSelector);
	const [storeInfo, setStoreInfo] = useState<StoreModel>(storeInfoDefaultState);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getEditStoreInfoAsync('01'));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	useEffect(() => {
		if (storeInfoDefaultState?.id) {
			setStoreInfo(storeInfoDefaultState);
		}
	}, [storeInfoDefaultState])

	const handleCancel = () => {
		return;
	}

	const handleSubmit = () => {
		dispatch(handleUpdateStoreInfoAsync(storeInfo));
	}

	const statusItems = [
		{
			value: 1,
			text: 'Approve',
			isDisable: false
		},
		{
			value: 2,
			text: 'Reject',
			isDisable: false
		},
		{
			value: 3,
			text: 'Confirming',
			isDisable: false
		},
		{
			value: 4,
			text: 'New',
			isDisable: false
		},
		{
			value: 5,
			text: 'Block',
			isDisable: false
		},
	]

	const handleChangeDate = (date: any) => {
		setStoreInfo({ ...storeInfo, ownerBirthday: date });
	}

	return (
		<>
			<div className={classes.editStoreWrapper}>
				<h1>Edit Store</h1>
				<Box display="flex" justifyContent="space-between" mt={4}>
					<Box width="100%">
						<Box display="flex" alignItems="center" flexDirection="column">
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, name: e.target.value })}
									value={storeInfo.name}
									width="800px"
									title="StoreName"
									titleMargin="25px"
									titleWidth="255px"
								/>
							</div>
							<div>
								<Box display="flex" width="800px" alignItems="center">
									<InputLabel className={classes.title}>Status</InputLabel>
									<CommonRadio listItems={statusItems}
									defaultValue={storeInfo.status} onChecked={(e, value) => { setStoreInfo({ ...storeInfo, status: value }); }} 
									flexDirection="row" />
								</Box>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, email: e.target.value })}
									value={storeInfo.email}
									title="Email"
									titleMargin="25px"
									width="800px"
									titleWidth="255px"
								/>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, address: e.target.value })}
									value={storeInfo.address}
									title="Address"
									width="800px"
									titleMargin="25px"
									titleWidth="255px"
								/>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, phone: e.target.value })}
									value={storeInfo.phone}
									title="Phone"
									width="800px"
									titleMargin="25px"
									titleWidth="255px"
								/>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, average: e.target.value })}
									value={storeInfo.average}
									title="Average revenue per day"
									titleMargin="25px"
									width="800px"
									titleWidth="255px"
								/>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, ownerName: e.target.value })}
									value={storeInfo.ownerName}
									title="Owner Name"
									titleMargin="25px"
									width="800px"
									titleWidth="255px"
								/>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, ownerId: e.target.value })}
									value={storeInfo.ownerId}
									title="Owner Id"
									titleMargin="25px"
									width="800px"
									titleWidth="255px"
								/>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, ownerPhone: e.target.value })}
									value={storeInfo.ownerPhone}
									title="Owner Phone"
									titleMargin="25px"
									titleWidth="255px"
									width="800px"
								/>
							</div>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, ownerAddress: e.target.value })}
									value={storeInfo.ownerAddress}
									title="Owner Address"
									titleMargin="25px"
									titleWidth="255px"
									width="800px"
								/>
							</div>
							<Box display="flex">
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, ownerBirthday: e.target.value })}
									value={storeInfo.ownerBirthday}
									title="Owner Birthday"
									titleMargin="25px"
									titleWidth="260px"
									width="751px"
								/>
								<DatePicker value={ new Date(storeInfo.ownerBirthday) } onChange={(date, value) => handleChangeDate(value)} />
							</Box>
							<div>
								<Input
									onChange={(e) => setStoreInfo({ ...storeInfo, taxCode: e.target.value })}
									value={storeInfo.taxCode}
									title="Tax Code"
									titleMargin="25px"
									titleWidth="255px"
									width="800px"
								/>
							</div>
						</Box>
						<Box display="flex" justifyContent="space-evenly" mt={4} paddingLeft={10} paddingRight={10}>
							<CommonButton title="Cancel" onClick={handleCancel} />
							<CommonButton title="Submit" onClick={handleSubmit} />
						</Box>
					</Box>
				</Box>
			</div>
		</>
	);
}