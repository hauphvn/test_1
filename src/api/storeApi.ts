import {MenuModel, StoreManagement, StoreModel} from "../models";
import {AccountBeta} from "../models/account";

export function getAllStoreSystemManagement() {
    return new Promise<{listStoreOriginal: StoreManagement[]}>(resolve => {
        setTimeout(() => {
            resolve({listStoreOriginal: [
                    {
                        id: '1',
                        name: 'StoreDetail A',
                        status: true
                    },
                {
                  id: '2',
                  name: 'StoreDetail B',
                  status: false
                }
              ]
            })
        }, 1000)
    })
}

export function getAllMenuByStoreId(storeId: string, querySearch: string) {
  console.log('call api menu: ', {storeId, querySearch})
  return new Promise<{listStoreOriginal: MenuModel[]}>(resolve => {
    setTimeout(() => {
      resolve({listStoreOriginal: [
          {
            storeId: '1',
            name: 'Ca hoi',
            status: true,
            createdDate: '0903762783642',
            price: '300,000đ',
            soldOut: true
          },
          {
            storeId: '2',
            name: 'Thằng lằn nướng mỡ hàng',
            status: false,
            createdDate: '0903762783642',
            price: '300,000đ',
            soldOut: false
          },
        ]
      })
    }, 1000)
  })
}

export function getStoreById(storeId: string) {
  console.log('call api store by id: ', {storeId})
  return new Promise<{store: StoreModel}>(resolve => {
    setTimeout(() => {
      const store: StoreModel = new StoreModel();
      store.id = '9727Aadw';
      store.name = 'Asian food'
      resolve({store: store})
    }, 1000)
  })
}

export function getAllAccountBeta() {
  return new Promise<{ listAccountBetaOriginal: AccountBeta[] }>(resolve => {
    setTimeout(() => {
      resolve({
        listAccountBetaOriginal: [
          {
            id: '1',
            name: 'name 1',
            phone: 'phone 1',
            email: 'email 1',
            otp: 'otp 1',
            expired: 'expired 1'
          },
          {
            id: '2',
            name: 'name 2',
            phone: 'phone 2',
            email: 'email 2',
            otp: 'otp 2',
            expired: 'expired 2'
          }
        ]
      })
    }, 500)
  })
}

export function getAccountBetaByQuery(query: string) {
  console.log('call api search: ', query);
  return new Promise<{ listAccountBetaSearch: AccountBeta[] }>(resolve => {
    setTimeout(() => {
      resolve({
        listAccountBetaSearch: [
          {
            id: '2',
            name: 'name 2',
            phone: 'phone 2',
            email: 'email 2',
            otp: 'otp 2',
            expired: 'expired 2'
          }
        ]
      })
    }, 500)
  })
}

export function deleteAccountBetaById(id: string) {
  console.log('delete acc id: ', id);
  return new Promise<{ listAccountBetaSearch: AccountBeta[] }>(resolve => {
    setTimeout(() => {
      resolve({
        listAccountBetaSearch: [
          {
            id: '2',
            name: 'name 2',
            phone: 'phone 2',
            email: 'email 2',
            otp: 'otp 2',
            expired: 'expired 2'
          }
        ]
      })
    }, 500)
  })
}


export function get(store: StoreManagement[]) {
  console.log('submit: ', store);
  return new Promise<{ status: boolean }>(resolve => {
    setTimeout(() => {
      resolve({status: true})
    }, 500)
  })
}

export function updateStoreSystemManagement(store: StoreManagement[]) {
  console.log('submit: ', store);
  return new Promise<{ status: boolean }>(resolve => {
    setTimeout(() => {
      resolve({status: true})
    }, 500)
  })
}

