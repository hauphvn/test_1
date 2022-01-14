import {LoadingProgess} from "../../../../common/LoadingProgess";
import {useAppSelector} from "../../../../../app/hooks";
import {loadingListStore} from "src/redux_management/store/selector"
import {useStyles} from "./Style";
import {Breadcrumbs} from "../../../../common/Breadcrumbs";
import {Input} from "../../../../common/Input";
import {useState} from "react";
import {CheckBox} from "src/components/common/CheckBox";
import TimeStartEnd from "../../../../common/TimeStartEnd/TimeStartEnd";
import {Select} from "../../../../common/Select";
import CommonTextArea from "../../../../common/TextArea/CommonTextArea";
import CommonRadio from "../../../../common/Radio/CommonRadio";
import {CommonButton} from "../../../../common/Button";
import AddIcon from '@material-ui/icons/Add';
import {AddMoreTopping} from "../../../../common/AddMoreTopping";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import clsx from "clsx";

export interface StoreProps {
}

export function EditMenuStore(props: StoreProps) {
	const statusLoading = useAppSelector(loadingListStore);
	const [menuName, setMenuName] = useState('');
	const [price, setPrice] = useState('');
	const [soldOut, setSoldOut] = useState(true);
	const [promo, setPromo] = useState(true);
	const [reducedPrice, setReducedPrice] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');
	const handleOnPageChange = () => {
		return;
	}
	const classes = useStyles();
	return (
		<>
			<div className={classes.editMenuStoreWrapper}>
				<div className={classes.breadcrumbWrapper}>
					<Breadcrumbs title={'Edit menu'} text={'Change information menu'}/>
				</div>
				<div className={classes.content}>
					<div className={classes.item}>
						<label>Menu name <span className={classes.start}>*</span></label>
						<Input
							value={menuName}
							onChange={(event) => setMenuName(event.target.value)}/>
					</div>
					<div className={classes.item}>
						<label>Price <span className={classes.start}>*</span></label>
						<Input
							value={price}
							onChange={(event) => setPrice(event.target.value)}/>
					</div>
					<div className={clsx(classes.item, classes.checkboxWrapper)}>
						<CheckBox
							checked={soldOut}
							width={18}
							label="Sold out"
							onChange={(event: any) => setSoldOut(event.target.checked)}
						/>
						<CheckBox
							checked={promo}
							width={18}
							label="Promo"
							onChange={(event: any) => setPromo(event.target.checked)}
						/>
					</div>
					<div className={classes.item}>
						<label>Reduced price <span className={classes.start}>*</span></label>
						<Input
							value={price}
							onChange={(event) => setPrice(event.target.value)}/>
					</div>
					<div className={clsx(classes.timeWrapper,classes.item)}>
						<TimeStartEnd
							containerWidth={'546px'}
							labelStartDate={"Start date"}
							labelEndDate={"End date"}
							startRequire={'*'}
							widthEndDate={'221px'}
							widthStartDate={'239px'}
						/>
					</div>
					<div className={classes.item}>
						<div className={classes.imageContainer}>
							<label>Image</label>
							<p>Only JPG, PNG, GIF with max size of 1Mb</p>
						</div>
						<div className={clsx(classes.importWrapper)}>
							<div className={clsx(classes.iconImportImage)}>
								<CameraAltIcon/>
								<p>Select image</p>
							</div>
						</div>
					</div>
					<div className={classes.item}>
						<label>Category</label>
						<Select
							width={'100%'}
							border={'1px solid #D2D2D2'}
							borderRadius={'3px'}
							options={[{value: 'name', name: 'name 1'}]}
							onChangeOptions={(e) => {
								console.log(e)
							}}/>
					</div>
					<div className={classes.item}>
						<label>Type</label>
						<Select
							width={'100%'}
							border={'1px solid #D2D2D2'}
							borderRadius={'3px'}
							options={[{value: 'name', name: 'name 1'}]}
							onChangeOptions={(e) => {
								console.log(e)
							}}/>
					</div>
					<div className={classes.item}>
						<label>Description</label>
						<CommonTextArea
							width={'100%'}
							height={'155px'}
							border={'1px solid #D2D2D2'}
							borderRadius={'3px'}
							onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div className={clsx(classes.item, classes.subItem)}>
						<label>Status</label>
						<div className={classes.groupRadios}>
						<CommonRadio
							flexDirection={'row'}
							defaultValue={1}
							listItems={[{value: 1, text: 'Active'}, {value: 2, text: 'Inactive'}]}
							onChecked={(e) => {
								console.log(e)
							}}/>
						</div>
					</div>
					<div className={classes.item}>
						<label>Type</label>
						<div className={clsx(classes.addMoreContainer)}>
							<Select
								width={'100%'}
								border={'1px solid #D2D2D2'}
								borderRadius={'3px'}
								options={[{value: 'name', name: 'name 1'}]} onChangeOptions={(e) => {
								console.log(e)
							}}/>
							<CommonButton
								borderRadius={"8px"}
								textColor={"black"}
								backgroundColor={"white"}
								leftIcon={<AddIcon/>}
							/>
						</div>
					</div>
					<div className={clsx(classes.line, classes.item)}></div>
					<div className={classes.addMore}>
						<AddMoreTopping/>
					</div>
				</div>
			</div>
			<LoadingProgess loading={statusLoading}/>
		</>
	);
}
