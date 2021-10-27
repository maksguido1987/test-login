import { TInitial } from './InitialActions';

export interface InitialState {
  login: string;
  password: string;
}

const initialState: InitialState = {
  login: '',
  password: '',
};

export const initialReducer = (state = initialState, action: TInitial) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        login: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};
