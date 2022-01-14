import useStyle from "./Style";
import {Typography} from "@material-ui/core";
import {useAppSelector} from "../../../../app/hooks";
import {listStoreOriginal} from "../../../../redux_management/store/selector";

export interface SystemDefaultProps {}

export function Account(props: SystemDefaultProps) {
  const classes = useStyle();
  const listStoreOriginalState = useAppSelector(listStoreOriginal);
  return(
    <div className={classes.rootAccount}>
      <Typography variant={"h4"}>Account</Typography>
    </div>
  )
}
