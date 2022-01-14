import useStyle from "./Style";
import React, {useEffect, useState} from "react";
import {CommonButton} from "../../../common/Button";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {dataEditUser} from "../../../../redux_management/user/selector";
import {getDataEditUserAsync, updateDataEditUserAsync} from "../../../../redux_management/user/editUserSlice";
import EditUserModel from "../../../../models/editUser";
import {Breadcrumbs} from "../../../common/Breadcrumbs";
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import clsx from "clsx";
import {Input} from "../../../common/Input";
import CommonRadio from "../../../common/Radio/CommonRadio";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import {DatePicker} from "../../../common/DatePicker";
import {Table} from "../../../common/Table";
import {Pagination} from "../../../common/Pagination";
import {TableHeaderModel} from "../../../../models/Table";

export interface EditUserProps {
}

export function EditUser(props: EditUserProps) {
  const classes = useStyle();
  const dispatch = useAppDispatch();
  const dataUserOriginalState = useAppSelector(dataEditUser);
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState<string | null | undefined>('');
  const [phone, setPhone] = useState('');
  const [createdDay, setCreatedDay] = useState<string | null | undefined>('');
  const [status, setStatus] = useState<boolean>(true);
  const [hobby, setHobby] = useState('');
  const [depositPoint, setDepositPoint] = useState('');
  const [genderDefaultIndex, setGenderDefaultIndex] = useState(0);
  const [btnSubmit, setBtnSubmit] = useState(false)
  const genders = [
    {
      id: 1,
      value: 'Male',
      isDisable: false
    },
    {
      id: 2,
      value: 'FeMale',
      isDisable: false
    },
  ];

  useEffect(() => {
    dispatch(getDataEditUserAsync({userId: 'userId'}));
  }, []);
  useEffect(() => {
    initDataUser();
    setBtnSubmit(false);
  }, [dataUserOriginalState])
  const initDataUser = () => {
    genders.forEach((item, index) => {
      if (item.value.toLocaleLowerCase() === (dataUserOriginalState.gender.toLocaleLowerCase())) {
        setGenderDefaultIndex(index);
        setGender(dataUserOriginalState.gender)
        return;
      }
    })

    setFamilyName(dataUserOriginalState.familyName);
    setGivenName(dataUserOriginalState.givenName);
    setEmail(dataUserOriginalState.email);
    setCreatedDay(dataUserOriginalState.createDate);
    setDob(dataUserOriginalState.dob);
    setPhone(dataUserOriginalState.phone);
    setHobby(dataUserOriginalState.hobby);
    setDepositPoint(dataUserOriginalState.depositPoint);
    setStatus(dataUserOriginalState.status)
  }
  const handleSubmit = () => {
    const newDataUser = new EditUserModel();
    newDataUser.dob = dob;
    newDataUser.id = dataUserOriginalState.id;
    newDataUser.email = email;
    newDataUser.phone = phone;
    newDataUser.status = status;
    newDataUser.givenName = givenName;
    newDataUser.gender = gender;
    newDataUser.depositPoint = depositPoint;
    newDataUser.createDate = createdDay;
    newDataUser.familyName = familyName;
    dispatch(updateDataEditUserAsync({user: newDataUser}));
  }
  const listStatus = [
    {value: 1, text: 'Approved'},
    {value: 2, text: 'Reject'},
    {value: 3, text: 'Confirming'},
    {value: 4, text: 'New'},
    {value: 5, text: 'Block'},
  ]
  const tableHeader: TableHeaderModel[] = [
    {
      value: '1',
      text: 'STT'
    }, {
      value: '1',
      text: 'Name'
    }, {
      value: '1',
      text: 'StoreID'
    }, {
      value: '1',
      text: 'Status'
    }, {
      value: '1',
      text: 'Email'
    }, {
      value: '1',
      text: 'Adress'
    }, {
      value: '1',
      text: 'Phone'
    }
  ]
  const listItemsTable: any[] = [
    {
      STT: '1',
      Name: '',
      StoreId: '',
      Status: '',
      Email: '',
      Address: '',
      Phone: ''
    }
  ]

  const handleOnPageChange = () => {
    return;
  }

  return (
    <div className={classes.rootEditUserPage}>
      <div className={classes.breadcrumbWrapper}>
        <Breadcrumbs title={'User'} text={'Change infomation user'}/>
      </div>
      <div className={clsx(classes.content)}>
        <div className={clsx(classes.submitWrapper)}>
          <CommonButton
            title={'Save'}
            leftIcon={<SaveOutlinedIcon/>}/>
        </div>
        <div className={clsx(classes.infoWrapper)}>
          <div className={clsx(classes.itemTitle)}>
            <p>Customer Information</p>
          </div>
          <div className={clsx('container-fluid')}>
            <div className={clsx('row')}>
              <div className={clsx('col-5')}>
                <div className={clsx('row')}>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>Customer name<span className={classes.start}>*</span></label>
                    <Input value={familyName}
                           onChange={(e) => setFamilyName(e.target.value)}/>
                  </div>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>Status</label>
                    <div className={classes.groupRadios}>
                      <CommonRadio
                        flexDirection={'row'}
                        defaultValue={1}
                        listItems={listStatus}
                        onChecked={(e) => {
                          console.log(e)
                        }}/>
                    </div>
                  </div>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>Image</label>
                    <div className={clsx(classes.importWrapper)}>
                      <div className={clsx(classes.iconImportImage)}>
                        <CameraAltIcon/>
                        <p>Select image</p>
                      </div>
                    </div>
                  </div>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>Birth day<span className={classes.start}>*</span></label>
                    <DatePicker
                      border={'1px solid #D2D2D2'}
                      borderRadius={'3px'}
                      value={new Date()}
                      onChange={(e) => {
                        console.log(e)
                      }}
                    />
                  </div>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>Address<span className={classes.start}>*</span></label>
                    <Input value={familyName}
                           onChange={(e) => setFamilyName(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className={clsx('col-2', classes.emptyInfoCol)}></div>
              <div className={clsx('col-5')}>
                <div className={clsx('row')}>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>ID card no<span className={classes.start}>*</span></label>
                    <Input value={familyName}
                           onChange={(e) => setFamilyName(e.target.value)}/>
                  </div>
                  <div className={clsx('col-12', classes.subItem, classes.emptyItem)}>
                  </div>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>ID back</label>
                    <div className={clsx(classes.importWrapper)}>
                      <div className={clsx(classes.iconImportImage)}>
                        <CameraAltIcon/>
                        <p>Select image</p>
                      </div>
                    </div>
                  </div>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>Phone number<span className={classes.start}>*</span></label>
                    <Input value={familyName}
                           onChange={(e) => setFamilyName(e.target.value)}/>
                  </div>
                  <div className={clsx('col-12', classes.subItem)}>
                    <label>Deposit point<span className={classes.start}>*</span></label>
                    <Input value={familyName}
                           onChange={(e) => setFamilyName(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(classes.tableWrapper)}>
        <Table
          headers={tableHeader}
          items={listItemsTable}/>
        <div className={classes.paginationWrapper}>
          <Pagination page={1} count={10} onChange={handleOnPageChange}/>
        </div>
      </div>
    </div>
  )
}
