import {createStyles, makeStyles, withStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

export const useTableStyles = makeStyles(() => ({
	rootTable: {
		padding: "21px 26px",
		"& .MuiTableCell-root": {
			borderBottom: "0px !important",
		},
		"& .MuiTableRow-head": {
			borderBottom: "1px solid var(--color-gray)",
		},
		"& .MuiTableRow-root": {
			borderBottom: "1px solid var(--color-gray)",
		},
		"& .MuiTableCell-head": {
			paddingTop: 0,
			paddingLeft: 0,
		},
		"& .MuiTableCell-body": {
			paddingLeft: 0,
		},
	},
	linkCell: {
		padding: '0'
	},
	tableRowLink: {
		fontWeight: 700,
		color: "var(--color-blue)",
	},
	tableActionCell: {
		display: "flex",
		justifyContent: "center",
	}
}));

type CellProps = {
	width?: number | string,
}

export const StyledTableCell = withStyles(() =>
	createStyles({
		head: {
			lineHeight: "var(--default-line-height)",
			fontSize: "var(--font-size-12)",
			color: "var(--color-black)",
			fontWeight: 600,
			width: (props: CellProps) => (props.width),
		},
	})
)(TableCell);
