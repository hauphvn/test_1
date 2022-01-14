export class StoreModel {
    id: string;
		name: string;
    status: number;
		email: string;
		address: string;
		phone: string;
		secondPhone: string;
		average: string;
		ownerName: string;
		ownerId: string;
		ownerPhone: string;
		ownerAddress: string;
		ownerBirthday: string;
		taxCode: string;
		despositPoint: number;
		companyName: string;

	constructor(){
		this.id = "";
		this.name = "";
    this.status = 4;
    this.email = "";
    this.address = "";
    this.phone = "";
    this.secondPhone = "";
    this.average = "";
    this.ownerName = "";
    this.ownerId = "";
    this.ownerPhone = "";
    this.ownerAddress = "";
    this.ownerBirthday = "";
    this.taxCode = "";
    this.despositPoint = 0;
    this.companyName = "";
	}
}
export interface StoreManagement {
  id: string,
  name: string,
  status: boolean
}

export const StoreNavigation = {
  menu: {
    name: 'Menu',
    path: '/menu'
  },
  category: {
    name: 'Category',
    path: '/category'
  },
  optionMenu: {
    name: 'Option menu',
    path: '/option-menu'
  },
  type: {
    name: 'Type',
    path: '/type'
  },
  table: {
    name: 'Table',
    path: '/table'
  },
  groupTable: {
    name: 'Group Table',
    path: '/group-table'
  },
  importData: {
    name: 'Import data',
    path: '/import-data'
  },
  exportData: {
    name: 'Export data',
    path: '/export-data'
  },
  setting: {
    name: 'Setting',
    path: '/setting'
  }
}
