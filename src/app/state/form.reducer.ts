import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from '../common/data.interface';
import { postFormActions } from './form.actions';
import { UserFormState } from './form.state';

// export function formReducer(state = initialState, action: PostForm) {
//   switch (action.type) {
//     case POST_FORM:
//       return [{ ...state, action }];
//   }
// }

export const formReducerRules = [
  on(postFormActions.postFormAction, (state: UserFormState) => ({
    ...state,
  })),
];

const reducer: any = createReducer(initialState, ...formReducerRules);

export const formReducer = (state: UserFormState | undefined, action: Action) =>
  reducer(state, action);
