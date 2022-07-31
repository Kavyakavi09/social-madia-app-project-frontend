import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signup = (formData, history) => async (formData, history) => {
  try {
    history.push('/auth');
  } catch (error) {}
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
