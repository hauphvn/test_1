import useStyle from "./Style";
import {Grid} from "@material-ui/core";
import {Input} from "../../../common/Input";
import {Switch} from "../../../common/Switch";
import {CommonButton} from "../../../common/Button";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {listStoreOriginal, loadingListStore} from "src/redux_management/store/selector"
import {useEffect, useState} from "react";
import {
  getAllStoreSystemManagementAsync, resetListStore,
  updateStoreSingle,
  updateStoreSystemManagementAsync
} from "../../../../redux_management/store/storeSlice";
import {StoreManagement} from "../../../../models";
import { LoadingProgess } from "src/components/common/LoadingProgess";
import { AlerDialog } from "src/components/common/AlerDialog";

export interface SystemDefaultProps {
}
enum ACTION_TYPE {
  INPUT,
  SWITCH

}
export function SystemDefault(props: SystemDefaultProps) {
	const classes = useStyle();
  const dispatch = useAppDispatch();
  const listStoreOriginalState = useAppSelector(listStoreOriginal);
  const statusLoading = useAppSelector(loadingListStore);
  const [btnSave, setBtnSave] = useState(false);
	const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getAllStoreSystemManagementAsync());
    return () => {
      dispatch(resetListStore());
    }
  }, [])
  const handleSave = () => {
    setBtnSave(false);
    dispatch(updateStoreSystemManagementAsync({store: listStoreOriginalState}));
		handleCloseModal();
  }
  const handleChangeStore = (event: any, store: StoreManagement, action: ACTION_TYPE) => {
    setBtnSave(true)
    if (action === ACTION_TYPE.INPUT) {
      const storeCurrent = JSON.parse(JSON.stringify(store));
      storeCurrent.name = event.target.value;
      dispatch(updateStoreSingle(storeCurrent));
    }else if(action === ACTION_TYPE.SWITCH){
      const storeCurrent = JSON.parse(JSON.stringify(store));
      storeCurrent.status = event.target.checked;
      dispatch(updateStoreSingle(storeCurrent));
    }
  }

	const handleOpenModal = () => {
		setOpenModal(true);
	}

	const handleCloseModal = () => {
		setOpenModal(false);
	}
  return (
    <div className={classes.rootSystemDefault}>
      <Grid container spacing={1} direction={"row"}>
        {listStoreOriginalState.map((store: StoreManagement) => (
          <Grid key={store.id} alignItems={"center"} item container xs={12}>
            <Grid item xs={11}>
              <Input
                disable={!store.status}
                title={"Label store"}
                onChange={(event) => {
                  handleChangeStore(event, store, ACTION_TYPE.INPUT)
                }} value={store.name}/>
            </Grid>
            <Grid item xs={1}>
              <Switch
                checked={store.status}
                onChange={(event) => {
                  handleChangeStore(event, store, ACTION_TYPE.SWITCH)
                }}/>
            </Grid>
          </Grid>
        ))}
        <Grid className={classes.buttonWrapper} item xs={12}>
          <CommonButton
            disable={!btnSave}
            onClick={handleOpenModal}
            title={'Save'}
          />
        </Grid>
      </Grid>
			<LoadingProgess loading={statusLoading}/>
			<AlerDialog
				handleOK={handleSave}
				open={openModal}
				handleClose={handleCloseModal}
				title='Confirm'
				message= 'Bạn đã thay đổi store...'
			/>
    </div>
  )
}
