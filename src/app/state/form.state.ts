import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserFormState {
  gender: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  nationality: string;
}

const getUserFormState = createFeatureSelector<UserFormState>('userFormState');

export const userFormStateSelector = createSelector(
  getUserFormState,
  (state: UserFormState): UserFormState => state
);
