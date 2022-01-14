import React from "react";
import PaginationBase from "@material-ui/lab/Pagination";
import { usePaginationStyles } from "./Style";

export interface PaginationProps {
  page: number;
  count: number;
  defaultPage?: number;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange: (event: any, newPage: number) => void;
}

export function Pagination(props: PaginationProps) {
  const classes = usePaginationStyles();
  return (
    <div className={classes.rootPagination}>
      <PaginationBase {...props} variant="outlined" shape="rounded"/>
    </div>
  );
}

Pagination.defaultProps = {
  hideNextButton: true,
  hidePrevButton: true,
};
