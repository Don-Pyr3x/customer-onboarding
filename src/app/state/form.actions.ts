import { Action, createAction, props } from '@ngrx/store';

import { UserForm } from '../common/data.interface';

export const POST_FORM = 'POST_FORM';

const postFormAction = createAction(POST_FORM, props<UserForm>);

export const postFormActions = {
  postFormAction,
};
