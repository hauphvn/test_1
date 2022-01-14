import { StyledTableCell, useTableStyles } from "./Style";
import TableBase from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import { TableHeaderModel } from "src/models/Table";
import { TableContainer } from "@material-ui/core";
import { useEffect, useState } from "react";

export interface TableImageProps {
	headers: TableHeaderModel[];
	items: any[];
	onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
}

export function TableImage(props: TableImageProps) {
	let { items } = props;
	const { headers, onRequestSort } = props;
	const [itemsList, setItemsList] = useState<any[]>([]);
	const classes = useTableStyles();
	useEffect(() => {
		setItemsList(items);
	}, [items]);
	const createSortHandler =
		(property: any) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};
	return (
		<div className={classes.rootTable}>
			<TableContainer>
				<TableBase className={classes.rootTable}>
					<TableHead>
						<TableRow>
							{headers.map((header: TableHeaderModel) => {
								return (
									<StyledTableCell key={header.value} align={header.align}>
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
													{Object.values(value).map((itemAct: any, index) => {
														return (
															<div
																key={index}
																className={classes.tableRowImage}
																style={{ backgroundImage: `url(${itemAct})` }}
															></div>
														);
													})}
												</StyledTableCell>
											);
										} else {
											return (
												<StyledTableCell
													key={childIndex}
													component="th"
													scope="row"
												>
													{value}
												</StyledTableCell>
											);
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

TableImage.defaultProps = {
	onRequestSort: (event: React.MouseEvent<unknown>, property: any) => {
		return;
	},
};
