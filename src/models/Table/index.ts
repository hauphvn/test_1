export interface TableHeaderModel {
    text: string;
    value: string;
    align?: "left" | "right" | "inherit" | "center" | "justify" | undefined;
    sortable?: boolean;
    orderBy?: | "desc" | "asc",
		width?: string | number
}

export interface TablePaginationOptionModel {
    rowsPerPageOptions: number[];
    rowsPerPage: number;
    page: number;
    onPageChange: (event: unknown, newPage: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ActionItemRowTable {
    icon: any,
    type: string
}

export interface HeaderColumnLinkTo {
    colName: string,
    path: string,
    param?: string
}

export interface CellColumnLinkTo {
    index: number,
    path: string,
    param?: string
}
