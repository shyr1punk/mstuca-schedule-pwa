import { FETCH_MENU, STORE_MENU, FETCH_MENU_ERROR } from './menuActions';

export const MENU_FETCHING = 'MENU_FETCHING';
export const MENU_OK = 'MENU_OK';
export const MENU_ERROR = 'MENU_ERROR';

/**
 * Загрузка данных меню
 *
 * @returns {Object} state
 */
export default (state = {
  menu: {
    faculties: [],
    specialities: [],
    groups: [],
    teachers: []
  },
  status: MENU_FETCHING
}, action) => {
  switch(action.type) {
  case FETCH_MENU:
    return {
      ...state,
      status: MENU_FETCHING
    };
  case STORE_MENU:
    return {
      ...state,
      menu: action.data,
      status: MENU_OK
    };
  case FETCH_MENU_ERROR:
    return {
      ...state,
      status: MENU_ERROR
    };
  default:
    return state;
  }
}
