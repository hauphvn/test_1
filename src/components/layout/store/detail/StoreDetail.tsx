import React, {useEffect} from 'react';
import {useStyles} from "./Style";
import {Breadcrumbs} from "../../../common/Breadcrumbs";
import {Box} from "@material-ui/core";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {loadingListStore, storeDetail} from "src/redux_management/store/selector"
import {getStoreByIdAsync} from "../../../../redux_management/store/storeSlice";
import {LoadingProgess} from "../../../common/LoadingProgess";
import {Card} from "../../../common/card";
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import CategoryIcon from '@material-ui/icons/Category';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ClassIcon from '@material-ui/icons/Class';
import WeekendIcon from '@material-ui/icons/Weekend';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SettingsIcon from '@material-ui/icons/Settings';
import GetAppIcon from '@material-ui/icons/GetApp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import EditIcon from '@material-ui/icons/Edit';
import clsx from "clsx";
import {CommonButton} from "../../../common/Button";
import {StoreNavigation} from "../../../../models";
import {useNavigate} from "react-router-dom";

export interface StoreProps {
}

export function StoreDetail(props: StoreProps) {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const storeDetailState = useAppSelector(storeDetail);
	const statusLoading = useAppSelector(loadingListStore);
	const storeNavigation = StoreNavigation;
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getStoreByIdAsync({storeId: 'storeId'}))
	}, []);
	const handleEdit = () => {
		const storeID = '9727Aadw'
		 navigate(window.location.pathname + '/edit');
	}
	const handleNavigation = (item: any) => {
		let path = '';
		for (const [key, value] of Object.entries(storeNavigation)) {
			if(value.name === item){
				path = value.path;
				break;
			}
		}
		navigate(window.location.pathname + path);

	}
	return (
		<div className={classes.storeDetailWrapper}>
			<div className={classes.breadcrumbWrapper}>
				<Breadcrumbs title={storeDetailState.name} text={`Store ID: ${storeDetailState.id}`}/>
				<div>
					<CommonButton
						onClick={handleEdit}
						title={"Edit"}
						leftIcon={<EditIcon/>}/>
				</div>
			</div>
			<Box className={clsx('container', classes.content)}>
				<p className={classes.titleItem}>Menu references</p>
				<div className={clsx('row', classes.rowItem)}>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var(--color-icon-menu)"} name={storeNavigation.menu.name}
									icon={RestaurantMenuIcon}/>
					</div>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var( --color-icon-category)"} name={storeNavigation.category.name}
									icon={CategoryIcon}/>
					</div>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var(--color-icon-option-menu)"} name={storeNavigation.optionMenu.name}
									icon={ListAltIcon}/>
					</div>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var( --color-icon-type)"} name={storeNavigation.type.name}
									icon={ClassIcon}/>
					</div>
				</div>
				<p className={classes.titleItem}>Table references</p>
				<div className={clsx('row', classes.rowItem)}>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var(--color-icon-table)"} name={storeNavigation.table.name}
									icon={WeekendIcon}/>
					</div>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var(--color-icon-group-table)"} name={storeNavigation.groupTable.name}
									icon={GroupWorkIcon}/>
					</div>
				</div>
				<p className={classes.titleItem}>Setting store</p>
				<div className={clsx('row', classes.rowItem)}>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var(--color-icon-setting)"} name={storeNavigation.setting.name}
									icon={SettingsIcon}/>
					</div>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var(--color-icon-import-data)"} name={storeNavigation.importData.name}
									icon={GetAppIcon}/>
					</div>
					<div className={clsx('col', 'col-3', 'item')}>
						<Card onClick={handleNavigation} backgroundIcon={"var(--color-icon-menu-export-data)"} name={storeNavigation.exportData.name}
									icon={ImportExportIcon}/>
					</div>
				</div>
			</Box>
			<LoadingProgess loading={statusLoading}/>
		</div>
	);
}
