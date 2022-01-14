import { makeStyles, withStyles, createStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

export const useTableStyles = makeStyles(() => ({
	rootTable: {
		padding: "21px 26px",
		"& .MuiTableCell-root": {
			borderBottom: "0px !important",
			padding: "8px 16px",
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
			paddingBottom: 14,
		},
		"& .MuiTableCell-body": {
			paddingLeft: 0,
		},
	},
	tableRowImage: {
		width: "120px",
		height: "80px",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		transform: "translateX(-20%)",
		backgroundColor: 'var(--color-grey)'
	},
}));

export const StyledTableCell = withStyles(() =>
	createStyles({
		head: {
			lineHeight: "var(--default-line-height)",
			fontSize: "var(--font-size-12)",
			color: "var(--color-black)",
			fontWeight: 600,
		},
	})
)(TableCell);
