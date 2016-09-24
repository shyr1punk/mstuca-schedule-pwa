import { FETCH_MENU, STORE_MENU, fetchMenu } from './actions';

/**
 * Загрузка данных меню
 *
 * @returns {Object} state
 */
export default (state = { menu: {
  faculties: [],
  specialities: [],
  groups: []
}}, action) => {
  switch(action.type) {
  case STORE_MENU:
    return {
      ...state,
      menu: action.data
    };
  default:
    return state;
  }
}
