import {SelectOptionModel} from "../models/Select";
import {ItemColumnSearch} from "../models/ItemColumnSearch";
import EditUser from "../models/editUser";
import {StoreManagement} from "../models";

export function searchFilterUser(inputValue: string, filterBy: string[]) {
    return new Promise<{ usersList: any[] }>(resolve =>
        setTimeout(() => {
            resolve({
                usersList: [
                    {
                        stt: 0,
                        id: '1',
                        name: 'Nguyen A',
                        email: 'emailA@gmail.com',
                        gender: 'male',
                    }, {
                        stt: 1,
                        id: '2',
                        name: 'Nguyen B',
                        email: 'emailB@gmail.com',
                        gender: 'female'
                    }
                ]
            })
        }, 1000)
    );
}

export function getOptionFilter() {
    return new Promise<{ optionsList: SelectOptionModel[] }>(resolve =>
        setTimeout(() => {
            resolve({
                optionsList: [
                    {
                        name: 'Name',
                        value: 'name'
                    },
                    {
                        name: 'Email',
                        value: 'email'
                    },
                    {
                        name: 'Gender',
                        value: 'gender'
                    }
                ]
            })
        }, 0)
    )
}

export function getColumnSearchList(userId: string) {
    return new Promise<{ columnSearchList: ItemColumnSearch[] }>(resolve =>
        setTimeout(() => {
           resolve({
               columnSearchList: [
                   {
                       value: 1,
                       checked: true,
                       text: 'stt'
                   },
                   {
                       value: 2,
                       checked: true,
                       text: 'name'
                   },
                   {
                       value: 3,
                       checked: false,
                       text: 'email'
                   },
                   {
                       value: 4,
                       checked: false,
                       text: 'gender'
                   }
               ]
           })
        }, 0)
    )
}

export function updateColumnSelected(userId: string) {
    return new Promise<{status: boolean}> (resolve =>
        setTimeout(() => {
            resolve({status: true})
        }, 500))
}

export function getAllDataEditUser(userId: string) {
    return new Promise<{listDataUser: EditUser}> (resolve => {
        setTimeout(() => {
            resolve({
                listDataUser: {
                    id: 'string',
                    familyName: 'familyName',
                    givenName: 'givenName',
                    email: 'email',
                    gender: 'female',
                    dob: '2022-01-05',
                    phone: '0123',
                    createDate: '2022-01-05',
                    status: false,
                    hobby: 'hobby',
                    depositPoint: 'depositPoint'
                }
            })
        }, 1000)
    })
}

export function updateEditUser(user: EditUser) {
    console.log('submit: ', user);
    return new Promise<{status: boolean}> (resolve => {
        setTimeout(() => {
            resolve({status: true})
        }, 500)
    })
}
