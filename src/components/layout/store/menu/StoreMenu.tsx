import {Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Input} from "src/components/common/Input";
import {useStyles} from "./Style";
import CommonButton from 'src/components/common/Button/CommonButton';
import {useAppDispatch, useAppSelector} from "src/app/hooks";
import {Table} from "src/components/common/Table";
import {Pagination} from "src/components/common/Pagination";
import {ActionItemRowTable, TableHeaderModel} from "src/models/Table";
import {listMenuStoreByStoreId,} from "src/redux_management/store/selector";

import {MenuModel} from "src/models";
import {Breadcrumbs} from "../../../common/Breadcrumbs";
import SearchIcon from '@material-ui/icons/Search';
import {LoadingProgess} from "../../../common/LoadingProgess";
import {loadingListStore} from "../../../../redux_management/store/selector";
import {getAllMenuByStoreIdAsync} from "../../../../redux_management/store/storeSlice";
import EditIcon from "@material-ui/icons/Edit";
import {BUTTON_ACTION_TYPE} from "../../../../models/account";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {useNavigate} from "react-router-dom";
import {NAVIGATION_PATH} from "../../../../app/constant";
import {AlerDialog} from "../../../common/AlerDialog";

export interface StoreProps {
}

export function StoreMenu(props: StoreProps) {
	const classes = useStyles();
	const navigate = useNavigate();
	const statusLoading = useAppSelector(loadingListStore);
	const [searchText, setSearchText] = useState("");
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const listMenuStoreByStoreIdState: MenuModel[] = useAppSelector(listMenuStoreByStoreId);
	const dispatch = useAppDispatch();
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
		}];
	const listActionTable: ActionItemRowTable[] = [{
		icon: <EditIcon/>,
		type: BUTTON_ACTION_TYPE.EDIT
	}, {
		icon: <DeleteOutlineIcon/>,
		type: BUTTON_ACTION_TYPE.DELETE
	}];
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
			const tempPath = 'storeId/itemMenu'
			navigate(`${NAVIGATION_PATH.STORE.INDEX}${tempPath}/edit`);
		} else if (actionType === BUTTON_ACTION_TYPE.DELETE) {
			setOpenDeleteModal(true);
		}
	}

	function handleCloseModal() {
		setOpenDeleteModal(false);
	}

	function handleDeleteMenuItem() {
		setOpenDeleteModal(false);
	}

	return (
		<>
			<div className={classes.storeMenuWrapper}>
				<div className={classes.breadcrumbWrapper}>
					<Breadcrumbs title={'Menu'} text={'Management all menu'}/>
				</div>
				<Box
					className={classes.content}>
					<Box width="80%">
						<Box className={classes.searchWrapper}>
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
						</Box>
					</Box>
				</Box>
				<div className={classes.tableContainer}>
					<Table
						onActionClickedItem={handleAction}
						listActionItem={listActionTable}
						headers={headerMenuTable}
						items={listMenuStoreByStoreIdState}
					/>
					<div className={classes.paginationWrapper}>
						<Pagination page={1} count={10} onChange={handleOnPageChange}/>
					</div>
				</div>
			</div>
			<LoadingProgess loading={statusLoading}/>
			<AlerDialog
				handleOK={handleDeleteMenuItem}
				open={openDeleteModal}
				handleClose={handleCloseModal}
				title="Confirm"
				message="Are you sure ?"
			/>
		</>
	);
}
