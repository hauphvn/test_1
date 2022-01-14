import {Box} from "@material-ui/core";
import {useEffect, useState} from "react";
import {Input} from "src/components/common/Input";
import {useStyles} from "./Style";
import CommonButton from 'src/components/common/Button/CommonButton';
import {useAppDispatch, useAppSelector} from "src/app/hooks";
import {Table} from "src/components/common/Table";
import {Pagination} from "src/components/common/Pagination";
import {ActionItemRowTable, TableHeaderModel} from "src/models/Table";
import {listMenuStoreByStoreId,} from "src/redux_management/store/selector";

import {MenuModel} from "src/models";
import {Breadcrumbs} from "../../../../common/Breadcrumbs";
import SearchIcon from '@material-ui/icons/Search';
import {LoadingProgess} from "../../../../common/LoadingProgess";
import {loadingListStore} from "../../../../../redux_management/store/selector";
import {getAllMenuByStoreIdAsync} from "../../../../../redux_management/store/storeSlice";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import clsx from "clsx";
import {BUTTON_ACTION_TYPE} from "../../../../../models/account";
import {EditOptionMenu} from "./edit/EditOptionMenu";

export interface StoreProps {
}

export function OptionMenu(props: StoreProps) {
	const classes = useStyles();
	const statusLoading = useAppSelector(loadingListStore);
	const [searchText, setSearchText] = useState("");
	const [openEditModal, setOpenEditModal] = useState(false);
	const listMenuStoreByStoreIdState: MenuModel[] = useAppSelector(listMenuStoreByStoreId);
	const dispatch = useAppDispatch();
	const listActionTable: ActionItemRowTable[] = [{
		icon: <EditIcon/>,
		type: BUTTON_ACTION_TYPE.EDIT
	}, {
		icon: <DeleteOutlineIcon/>,
		type: BUTTON_ACTION_TYPE.DELETE
	}];
	const headerMenuTable: TableHeaderModel[] = [
		{
			value: '1',
			text: 'STT'
		},
		{
			value: '2',
			text: 'Name'
		},
		{
			value: '3',
			text: 'Sold out'
		},
		{
			value: '4',
			text: 'Price'
		},
		{
			value: '5',
			text: 'Status'
		},
		{
			value: '6',
			text: 'Created date'
		},
		{
			value: '7',
			text: 'Action'
		}]
	useEffect(() => {
		dispatch(getAllMenuByStoreIdAsync({storeId: '1', query: "something"}));
	}, []);

	const handleSearch = () => {
		dispatch(
			getAllMenuByStoreIdAsync({storeId: '1', query: searchText})
		);
	};

	const handleOnPageChange = () => {
		return;
	}
	const handleAction = (actionType: string, idItem: string) => {
		if (actionType === BUTTON_ACTION_TYPE.EDIT) {
		setOpenEditModal(true);
		} else {
			console.log('edit')
		}
	}
	const handleSaveEdit = () => {

	}
	return (
		<>
			<div className={classes.optionMenuWrapper}>
				<div className={classes.breadcrumbWrapper}>
					<Breadcrumbs title={'Option menu'} text={'Management all option menu'}/>
				</div>
				<div
					className={classes.content}>
					<div className={clsx(classes.actionWrapper)}>
						<div className={clsx(classes.inputWrapper)}>
							<div className={classes.searchInput}>
								<Input
									placeholder={'Add content search here'}
									onChange={(e) => setSearchText(e.target.value)}
									value={searchText}
								/>
							</div>
							<CommonButton
								leftIcon={<SearchIcon/>}
								onClick={handleSearch}
							/>
						</div>
					</div>
				</div>
				<div className={classes.tableContainer}>
					<Table
						onActionClickedItem={handleAction}
						listActionItem={listActionTable}
						headers={headerMenuTable}
						items={listMenuStoreByStoreIdState}
					/>
					<Box className={classes.paginationWrapper}>
						<Pagination page={1} count={10} onChange={handleOnPageChange}/>
					</Box>
				</div>
			</div>
			<LoadingProgess loading={statusLoading}/>
			<EditOptionMenu
			title={"Option Menu"}
			open={openEditModal}
			handleCancel={() => setOpenEditModal(false)}
			handleSave={handleSaveEdit}
			/>
		</>
	);
}
