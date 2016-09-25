import { createAction } from 'redux';

export const FETCH_MENU = 'FETCH_MENU';
export const STORE_MENU = 'STORE_MENU';
export const STORE_SCHEDULE = 'STORE_SCHEDULE';

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

export const fetchSchedule = (dispatch, groupId) =>
  fetch(`/schedule/${groupId}`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      dispatch({
        type: STORE_SCHEDULE,
        data: response,
        groupId: groupId
      });
    });
