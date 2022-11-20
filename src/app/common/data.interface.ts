export interface UserForm {
  gender: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  nationality: string;
}

export const initialState: UserForm = {
  gender: '',
  firstName: '',
  lastName: '',
  dateOfBirth: new Date(),
  nationality: '',
};
