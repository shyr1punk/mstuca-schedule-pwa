import { createAction } from 'redux';

export const FETCH_MENU = 'FETCH_MENU';
export const STORE_MENU = 'STORE_MENU';
export const STORE_GROUP_SCHEDULE = 'STORE_GROUP_SCHEDULE';
export const STORE_TEACHER_SCHEDULE = 'STORE_TEACHER_SCHEDULE';

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

export const fetchGroupSchedule = (dispatch, groupId) =>
  fetch(`/schedule/groups/${groupId}`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_GROUP_SCHEDULE,
        data: response,
        groupId: groupId
      });
    });

export const fetchTeacherSchedule = (dispatch, teacherName) =>
  fetch(`/schedule/teachers/${teacherName}`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_TEACHER_SCHEDULE,
        data: response,
        teacherName
      })
    })
