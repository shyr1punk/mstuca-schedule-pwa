import { createAction } from 'redux';

export const FETCH_MENU = 'FETCH_MENU';
export const STORE_MENU = 'STORE_MENU';

/**
 * Загрузка данных меню
 *
 * @returns {Object} state
 */
export const fetchMenu = dispatch =>
  fetch('/menu')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_MENU,
        data: response
      });
    });
