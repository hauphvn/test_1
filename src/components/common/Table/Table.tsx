import {StyledTableCell, useTableStyles} from "./Style";
import TableBase from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import {HeaderColumnLinkTo, CellColumnLinkTo, TableHeaderModel} from "src/models/Table";
import {TableCell, TableContainer} from "@material-ui/core";
import {CommonButton} from "../Button";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export interface TableProps {
	headers: TableHeaderModel[];
	listActionItem?: any[]; // listActionItem={[<AccessAlarmIcon />, <AccessAlarmIcon />]} list icon for action
	items: any[]; // key item same key from headers data
	onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
	onActionClickedItem?: (actionType: string, itemId: string) => void;
	/***
	 * tableColumnLinksTo: thể hiện cột nào trong tabel cần được href
	 * Khi cột đó cần href thì cần phải có thông tin:
	 * 	+ tên cột
	 * 	+ path để href
	 * 	+ param nếu có
	 */
	tableColumnLinksTo?: HeaderColumnLinkTo[];

}

export function Table(props: TableProps) {
	let {items} = props;
	const {headers, onRequestSort, onActionClickedItem, listActionItem, tableColumnLinksTo} = props;
	const [itemsList, setItemsList] = useState<any[]>([]);
	const classes = useTableStyles();
	let colIndexList: CellColumnLinkTo[] = [];
	useEffect(() => {
		if (listActionItem && listActionItem.length > 0) {
			addActionToListItems();
		} else {
			setItemsList(items);
		}
		// findColIndexLinkTo();
	}, [items]);
	const createSortHandler =
		(property: any) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};
	const addActionToListItems = () => {
		items = items.map((item: any) => ({
			...item,
			listAction: listActionItem,
		}));
		setItemsList(items);
	};

	/***
	 * Hàm findColIndexLinkTo:
	 * Matching tên cột của Header và tên cột của item trong tableColumnLinksTo
	 */
	function findColIndexLinkTo() {
		tableColumnLinksTo?.forEach(((column: HeaderColumnLinkTo) => {
			headers.forEach((header: TableHeaderModel, index: number) => {
				if (header.value === column.colName) {
					colIndexList.push({
						index: index,
						path: column.path,
						param: column.param
					});
				}
			})
		}))
	}

	findColIndexLinkTo();
	return (
		<div className={classes.rootTable}>
			<TableContainer>
				<TableBase className={classes.rootTable}>
					<TableHead>
						<TableRow>
							{headers.map((header: TableHeaderModel) => {
								return (
									<StyledTableCell
										key={header.value}
										align={header.align}
										width={header.width ? header.width : "auto"}
									>
										<TableSortLabel
											hideSortIcon={!header.sortable}
											direction={header.orderBy}
											onClick={createSortHandler(header.value)}
										>
											{header.text}
										</TableSortLabel>
									</StyledTableCell>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{itemsList.map((item: any, index: number) => {
							return (
								<TableRow key={index}>
									{Object.values(item).map((value: any, childIndex: number) => {
										if (typeof value === "object") {
											return (
												<StyledTableCell
													key={childIndex}
													component="th"
													scope="row"
												>
													<div className={classes.tableActionCell}>
														{Object.values(value).map((itemAct: any, index) => {
															return (
																<CommonButton
																	key={index}
																	float={"left"}
																	onClick={() =>
																		onActionClickedItem
																			? onActionClickedItem(itemAct.type, item.id)
																			: () => {}
																	}
																	leftIcon={itemAct.icon}
																	backgroundColor={"transparent"}
																	textColor={"var(--color-black)"}
																	boxShadow={"transparent"}
																/>
															);
														})}
													</div>
												</StyledTableCell>
											);
										} else {
											const index = colIndexList.findIndex(col => col.index === childIndex);
											// Trường hợp cột không có href
											if (index === -1) {
												return (
													<StyledTableCell
														key={childIndex}
														component="th"
														scope="row"
														style={{
															fontWeight: 400,
															fontSize: 'var(--font-size-12)'
														}}
														// className={ childIndex === 1 ? classes.tableRowLink : ''}
													>
														{value}
													</StyledTableCell>
												);
											} else {
												/***
												 * Trường hợp cột có href.
												 * Có param hoặc không có param
												 */
												let path = colIndexList[index].path;
												if(colIndexList[index].param) {
													// @ts-ignore
													path += item[colIndexList[index].param];
												}
												return (
													<StyledTableCell
														key={childIndex}
														component="th"
														scope="row"
														// className={ childIndex === 1 ? classes.tableRowLink : ''}
													>
														<TableCell
															className={classes.linkCell}>
															<Link
																to={path}
																style={{textDecoration: 'none',
																	color: 'var(--color-blue)',
																	fontWeight: 700,
																fontSize: 'var(--font-size-12)'
																}}
															>
																{value}
															</Link>
														</TableCell>
													</StyledTableCell>
												);
											}
										}
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</TableBase>
			</TableContainer>
		</div>
	);
}

Table.defaultProps = {
	tableColumnLinksTo: [],
	onRequestSort: (event: React.MouseEvent<unknown>, property: any) => {
		return;
	},
};
