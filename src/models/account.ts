export const BUTTON_ACTION_TYPE = {
  EDIT: 'EDIT',
  DELETE: 'DELETE'
}
export interface AccountBeta {
  id: string,
  name: string,
  email: string,
  phone: string
  otp: string,
  expired: string
}
export interface Account {
  id: string,
  name: string,
  email: string,
  phone: string
  status: string,
  role: string
}
