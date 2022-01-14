import useStyle from "./Style";
import {Grid} from "@material-ui/core";
import {Input} from "../../../common/Input";
import {CommonButton} from "../../../common/Button";
import {Table} from "../../../common/Table";
import {TableHeaderModel} from "../../../../models/Table";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {listAccountBetaOriginal, loadingListStore} from "../../../../redux_management/store/selector";
import {BUTTON_ACTION_TYPE} from "../../../../models/account";
import {useEffect, useState} from "react";
import {
  deleteAccountBetaAsync,
  getAccountBetaByQueryAsync,
  getAllAccountBetaAsync
} from "../../../../redux_management/store/storeSlice";
import {LoadingProgess} from "../../../common/LoadingProgess";
import {AlerDialog} from "../../../common/AlerDialog";

export interface SystemDefaultProps {
}

export function AccountBeta(props: SystemDefaultProps) {
  const classes = useStyle();
  const [inputSearch, setInputSearch] = useState<string>('');
  const [openModal, setOpenModal] = useState(false);
  const [accountId, setAccountId] = useState('')
  const dispatch = useAppDispatch();
  const listAccountBetaOriginalState = useAppSelector(listAccountBetaOriginal);
  const statusLoading = useAppSelector(loadingListStore);
  const listAction = [BUTTON_ACTION_TYPE.EDIT, BUTTON_ACTION_TYPE.DELETE]
  const headers: TableHeaderModel[] = [
    {
      value: '1',
      text: 'AccountId',
      sortable: false
    },
    {
      value: '2',
      text: 'Name',
      sortable: true
    },
    {
      value: '3',
      text: 'Email',
      sortable: true
    },
    {
      value: '4',
      text: 'Phone',
      sortable: false
    },
    {
      value: '5',
      text: 'OTP',
      sortable: false
    },
    {
      value: '6',
      text: 'Expired',
      sortable: true
    },
    {
      value: '7',
      text: 'Action',
      sortable: false
    }
  ];
  useEffect(() => {
    dispatch(getAllAccountBetaAsync());
  }, []);
  const handleSearch = () => {
    if (inputSearch) {
      dispatch(getAccountBetaByQueryAsync(inputSearch));
    }
  }
  const handleCloseModal = () => {
    setOpenModal(false);
  }
  const handleDelete = () => {
    dispatch(deleteAccountBetaAsync(accountId));
    setAccountId('');
    handleCloseModal();
  }
  const handleOpenModal = () => {
    setOpenModal(true);
  }
  const handleActionItem = (actionType: string, itemId: string) => {
    if (actionType === BUTTON_ACTION_TYPE.DELETE) {
      setAccountId(itemId);
      handleOpenModal();
    } else {
      console.log('edit')
    }
  }
  return (
    <div className={classes.rootAccountBeta}>
      <Grid container>
        <Grid item container xs={12}>
          <Grid alignItems={"center"} container item xs={5}>
            <Grid item xs={11}>
              <Input
                value={inputSearch}
                onChange={(event) => setInputSearch(event.target.value)}/>
            </Grid>
            <Grid item xs={1}>
              <CommonButton
                onClick={handleSearch}
                title={"Search"}/>
            </Grid>
          </Grid>
          <Grid item xs={6}/>
          <Grid item xs={1}>
            <CommonButton
              title={"Add account"}/>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Table
          listActionItem={listAction}
          onActionClickedItem={(actionType, itemId) => {
            handleActionItem(actionType, itemId);
          }}
          headers={headers} items={listAccountBetaOriginalState}/>
      </div>
      <LoadingProgess loading={statusLoading}/>
      <AlerDialog
        handleOK={handleDelete}
        open={openModal}
        handleClose={handleCloseModal}
        title='Confirm'
        message='Are you sure ?'
      />
    </div>
  )
}
