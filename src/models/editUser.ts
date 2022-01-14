class EditUser {
  id: string;
  familyName: string;
  givenName: string;
  email: string;
  gender: string;
  dob: string | null | undefined;
  phone: string;
  createDate: string | null | undefined;
  status: boolean;
  hobby: string;
  depositPoint: string

  constructor() {
    this.id = ""
    this.familyName = "";
    this.dob = "";
    this.createDate = "";
    this.hobby = "";
    this.depositPoint = "";
    this.gender = "";
    this.givenName = "";
    this.status = true;
    this.phone = "";
    this.email = "";
  }
}
export default EditUser;

