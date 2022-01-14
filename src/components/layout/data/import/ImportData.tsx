import { useState, useEffect } from "react";
import { Input } from "src/components/common/Input";
import { useImportDataStyles } from "./Style";
import CommonButton from "src/components/common/Button/CommonButton";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { Table } from "src/components/common/Table";
import { Pagination } from "src/components/common/Pagination";
import { TableHeaderModel } from "src/models/Table";
import {
	listColumnSearch,
	listRestaurants,
} from "src/redux_management/restaurant/selector";

import {
	getColumnSearchListAsync,
	getOptionsFilterSearchAsync,
	searchFilterAsync,
	updateColumnSelect,
	updateRestaurantList,
} from "src/redux_management/restaurant/restaurantSlice";
import { ItemColumnSearch } from "src/models/ItemColumnSearch";
import { RestaurantModel } from "src/models";
import { Breadcrumbs } from "src/components/common/Breadcrumbs";
import GetAppIcon from '@material-ui/icons/GetApp';
import clsx from "clsx";
import { TableImage } from "src/components/common/TableImage";

export interface ImportDataProps {}

export function ImportData(props: ImportDataProps) {
	const classes = useImportDataStyles();
	const [searchText, setSearchText] = useState("");
	const [tableHeaders, setTableHeaders] = useState<TableHeaderModel[]>([]);
	
	const listRestaurantState: RestaurantModel[] =
		useAppSelector(listRestaurants);
	const dispatch = useAppDispatch();
	const listColumnSearchState: ItemColumnSearch[] =
		useAppSelector(listColumnSearch);

	useEffect(() => {
		handleSetTableHeader(listColumnSearchState);
		setTableHeaders([
			{
				text: "STT",
				value: "stt",
			},
			{
				text: "Image",
				value: "image",
			},
			{
				text: "Name",
				value: "name",
			},
			{
				text: "Sold out",
				value: "soldout",
			},
			{
				text: "Price",
				value: "price",
			},
			{
				text: "Status",
				value: "status",
			}
		]);
	}, [listColumnSearchState]);

	const tableItems = [
		{
			stt: "1",
			image: ["https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg"],
			name: "Vategable",
			soldout: "Yes",
			price: "450,000đ",
			status: "Enable",
		},
		{
			stt: "2",
			image: ["https://images.ctfassets.net/hrltx12pl8hq/4912WN5YdLWBhgXJsCnn9o/091cc168cab1b033888317b44ceded76/01-food-and-drink_722718097.jpg?fit=fill&w=480&h=270"],
			name: "Vategable",
			soldout: "Yes",
			price: "450,000đ",
			status: "Enable",
		},
		{
			stt: "3",
			image: ["https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg"],
			name: "Vategable",
			soldout: "Yes",
			price: "350,000đ",
			status: "Disable",
		},
		{
			stt: "4",
			image: ["https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg"],
			name: "Vategable",
			soldout: "Yes",
			price: "150,000đ",
			status: "Enable",
		},
		{
			stt: "1",
			image: ["https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg"],
			name: "Vategable",
			soldout: "Yes",
			price: "450,000đ",
			status: "Enable",
		},
	];

	const handleImportData = () => {
		
	};
	const handleSetTableHeader = (columns: any[]) => {
		const newTabHeaders: TableHeaderModel[] = [];
		columns.map((column) => {
			if (column.checked) {
				const header: TableHeaderModel = {
					text: column.text,
					value: column.text,
				};
				newTabHeaders.push(header);
			}
		});
		setTableHeaders(newTabHeaders);
	};

	return (
		<div className={classes.rootImportData}>
			<Breadcrumbs title={"Import data"} text={"Import data menu customer"} />
			<div className={classes.importDaraContainer}>
				<div className={classes.importDataFilterHeader}>
					<div className={clsx(classes.headerCol)}>
						<div className={classes.input}>
							<CommonButton
								leftIcon={<GetAppIcon></GetAppIcon>}
								onClick={handleImportData}
								title="Import"
							/>
						</div>
					</div>
				</div>
				<div className={classes.importDataTable}>
					<TableImage headers={tableHeaders} items={tableItems} />
				</div>
			</div>
		</div>
	);
}
