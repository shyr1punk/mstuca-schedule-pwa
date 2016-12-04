export const FETCH_MENU = 'FETCH_MENU';
export const STORE_MENU = 'STORE_MENU';
export const FETCH_MENU_ERROR = 'FETCH_MENU_ERROR';

export const SET_ACTIVE_GROUP = 'SET_ACTIVE_GROUP';

/**
 * Загрузка данных меню
 *
 * @returns {Object} state
 */
export const fetchMenu = dispatch =>
  fetch('/api/menu')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_MENU,
        data: response
      });
    }, () => {
      dispatch({
        type: FETCH_MENU_ERROR
      })
    });
